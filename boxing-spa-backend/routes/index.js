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

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: conf.email.id,
    pass: conf.email.pass
  }
});

var mailOptions = {
  from: conf.email.id,
  to: conf.email.id,
  subject: 'Free Trial Request',
  html: `<!doctype html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>Simple Transactional Email</title>
      <style>
      /* -------------------------------------
          INLINED WITH htmlemail.io/inline
      ------------------------------------- */
      /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
      ------------------------------------- */
      @media only screen and (max-width: 620px) {
        table[class=body] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }
        table[class=body] p,
              table[class=body] ul,
              table[class=body] ol,
              table[class=body] td,
              table[class=body] span,
              table[class=body] a {
          font-size: 16px !important;
        }
        table[class=body] .wrapper,
              table[class=body] .article {
          padding: 10px !important;
        }
        table[class=body] .content {
          padding: 0 !important;
        }
        table[class=body] .container {
          padding: 0 !important;
          width: 100% !important;
        }
        table[class=body] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
        table[class=body] .btn table {
          width: 100% !important;
        }
        table[class=body] .btn a {
          width: 100% !important;
        }
        table[class=body] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }
      /* -------------------------------------
          PRESERVE THESE STYLES IN THE HEAD
      ------------------------------------- */
      @media all {
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass,
              .ExternalClass p,
              .ExternalClass span,
              .ExternalClass font,
              .ExternalClass td,
              .ExternalClass div {
          line-height: 100%;
        }
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }
        .btn-primary table td:hover {
          background-color: #34495e !important;
        }
        .btn-primary a:hover {
          background-color: #34495e !important;
          border-color: #34495e !important;
        }
      }
      </style>
    </head>
    <body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
      <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
        <tr>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
          <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
            <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
  
              <!-- START CENTERED WHITE CONTAINER -->
              <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Your appointment request.</span>
              <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
  
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                      <tr>
                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Hi there,</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">{ user } is requesting for a trial class on {date} at {time}</p>
                          <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
                            <tbody>
                              <tr>
                                <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;">
                                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                    <tbody>
                                      <tr>
                                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;"> <a href="http://htmlemail.io" target="_blank" style="display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;">Accept</a> </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">In order to confirm please click the button above</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Thank You</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
  
              <!-- END MAIN CONTENT AREA -->
              </table>
  
              <!-- START FOOTER -->
              <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                  <tr>
                    <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                      <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">Knockout Combat 365, D.N Nagar, Mumbai 400056</span>
                      <br> Don't like these emails? <a href="http://i.imgur.com/CScmqnj.gif" style="text-decoration: underline; color: #999999; font-size: 12px; text-align: center;">Unsubscribe</a>.
                    </td>
                  </tr>
                  <tr>
                    <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                      Powered by <a href="http://htmlemail.io" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">HTMLemail</a>.
                    </td>
                  </tr>
                </table>
              </div>
              <!-- END FOOTER -->
  
            <!-- END CENTERED WHITE CONTAINER -->
            </div>
          </td>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
        </tr>
      </table>
    </body>
  </html>`.replace('{ user }',"Arnav")
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// const TOKEN_PATH = "token.json"
// const SCOPES = ['https://www.googleapis.com/auth/calendar']

// fs.readFile('credentials.json',(err,content) => {
//   if(err) return console.log('Error loading client secret file:',err)

//   authorize(JSON.parse(content), intializeGoogleCalendar)
  
// })

// function authorize(content, callback) {
//   const { client_id, client_secret, redirect_uris } = content.installed
//   const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0])

//   fs.readFile(TOKEN_PATH, (err,token) => {
//     if(err) return getAccessToken(oAuth2Client, callback);
    
//     callback(JSON.parse(token));

//   })
// }


// function getAccessToken(oAuth2Client, callback) {
//   const authUrl = oAuth2Client.generateAuthUrl({
//     access_type: "offline",
//     scope: SCOPES
//   })

//   console.log("Authorize this app by visiting the following URL:",authUrl);
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })

//   rl.question("Enter the code from that URL here: ", (code) => {
//     rl.close();
    
//     oAuth2Client.getToken(code, (err,token) => {
//       console.log("get Sccess: ",token)
//       if(err) return console.error('Error retrieving access token', err)
//       oAuth2Client.setCredentials(token)

//       fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
//         if(err) console.err(err)
//         console.log("Token stored to ", TOKEN_PATH)
//       })

//       callback(JSON.parse(token))
//     })
//   })
// }


// function intializeGoogleCalendar(token){
//   const googleCalendar = new gcal.GoogleCalendar(token.access_token)
//   googleCalendar.calendarList.list(function(err, calendarList) {
//     console.log(err)
//     console.log(calendarList.items[0].id)
//     event = {
//       'summary': "Buy Arnav's Gift!!!!",
//       'location': '1301/2A Samartha Aangan',
//       'description': 'But his gift or he will get mad',
//       'start': {
//         'dateTime': '2018-12-14T09:00:00-07:00',
//         'timeZone': 'America/Los_Angeles',
//       },
//       'end': {
//         'dateTime': '2018-12-17T17:00:00-07:00',
//         'timeZone': 'America/Los_Angeles',
//       },
//       'recurrence': [
//         'RRULE:FREQ=DAILY;COUNT=3'
//       ],
//       'attendees': [
//         {'email': 'disha96k@gmail.com'},
//         {'email': 'shantanukamath@live.in'},
//         {'email': 'Kanikakhanna2396@gmail.com'},
//         {'email': "Shivm.7719@gmail.com"},
//         {'email': "Dishak96@hotmail.co.uk"}
//       ],
//       'reminders': {
//         'useDefault': false,
//         'overrides': [
//           {'method': 'email', 'minutes': 24 * 60},
//           {'method': 'popup', 'minutes': 10},
//         ],
//       },
//     }
//     googleCalendar.events.insert(calendarList.items[0].id ,event,(err, data) => {
//       console.log(err);
//       console.log(data)
//     })
//   })
  
// }


router.get('/test', function(req, res, next) {
  
  res.json({blah:"hyyyy"})
});

module.exports = router;
