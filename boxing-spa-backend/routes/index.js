var express = require('express');
var router = express.Router();

const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const gcal = require('google-calendar')
const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const conf = require("../conf.json")
const path = require("path")
const client = require('twilio')(conf.twilio.accountSid, conf.twilio.authToken);
const guidGenerator = require("../utils/uidGenerator")

const userDict = {}

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: conf.email.id,
    pass: conf.email.pass
  }
});

const html = fs.readFileSync(path.resolve(__dirname, '../assets/templates/request.html'), 'utf8')
let mailOptions = {
  from: conf.email.id,
  to: conf.email.id,
  subject: 'Free Trial Request',
  html: html
};


router.post('/signup', (req,res) => {
  const { phoneNo, firstName, lastName, date, time } = req.body
  const uniqueId = guidGenerator()
  userDict[uniqueId] = {phoneNo: phoneNo,
                        firstName: firstName,
                        lastName: lastName,
                        date: date,
                        time: time}
  mailOptions = {...mailOptions,html: html.replace("{ user }",firstName + " " + lastName)
                                          .replace("{ confirmUri }","https://knockout-365.herokuapp.com/api/confirmation/" + uniqueId ) 
                                          .replace("{ confirmDate }",date)
                                          .replace("{ confirmTime }",time)
                                        }
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.json({success:false})
    } else {
      console.log('Email sent: ' + info.response);
      res.json({success:true})
    }
  });

  
})

router.get('/confirmation/:id', (req,res) => {
  if(userDict.hasOwnProperty(req.params.id)){
    const { firstName, lastName, phoneNo, date, time } = userDict[req.params.id]
    client.messages 
    .create({  
       from: '+16084925510',       
       to: phoneNo,
       body: `Hi ${firstName + ' ' + lastName},\nYour appointment is confirmed for ${date} at ${time}`
     }) 
    .then(message => {
      delete userDict[req.params.id]
    }) 
    .done();
  }
  else{
    console.error("Wrong confirmation Id: Not present")
  }
 
  res.send("Done")

})

router.get('/test', function(req, res, next) {
  
  res.json({blah:"hyyyy"})
});

module.exports = router;
