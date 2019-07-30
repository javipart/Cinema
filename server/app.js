const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const loginRoute = require('./routes/login-route');
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
    secret: 'javipart',
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize);
app.use(passport.session());
app.use(flash());
require('./driver/mongo-driver');

require('./config/passport')(passport);

const port = process.env.PORT || 3090;
app.use(cors());

app.use('api/login', loginRoute)(app, passport);

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
