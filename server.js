const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./models/index');


dotenv.config();
const app = express();

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({ db: db.sequelize }),
  })
);

// View engine setup using Handlebars
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./controllers/index');
const authRouter = require('./controllers/auth');
// Add other controllers as needed

app.use('/', indexRouter);
app.use('/auth', authRouter);
// Add other routes as needed

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});