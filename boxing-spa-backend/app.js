const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');

const app = express();
const port = process.env.PORT || 3001;

app.use('/api',indexRouter)

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../boxing-spa/build')));
    

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname,'../boxing-spa/build', 'index.html'));
    });
}

app.listen(port)


module.exports = app
