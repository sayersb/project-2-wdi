const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');

const User = require('./models/user');
const { port, dbURI } = require('./config/environment');

const router = require('./config/routes');

// const databaseURI = 'mongodb://localhost/project-2-wdi';

mongoose.connect(dbURI);


const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);


app.use(morgan('dev'));

app.use(express.static(`${__dirname}/public`));

app.use(ejsLayouts);
console.log(__dirname);


app.use(bodyParser.urlencoded({ extended: true}));


app.use(session({
  secret: process.env.SESSION_SECRET || 'ssh it\'s a secret',
  resave: false,
  saveUninitialized: false
}));


app.use((req, res, next) => {
  if(!req.session.userId) return next();
  console.log('session middleware');
  console.log(req.session);
  User
    .findById(req.session.userId)
    .populate({path: 'results', populate: {path: 'creator'}})
    .exec()
    .then((user) =>{
      res.locals.user = user;
      res.locals.isLoggedIn = true;
      next();
    });


});



app.use(methodOverride((req) => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body){
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));



app.use(router);


//
// app.get('/', (req, res) => res.render('index', {
//   question: 'Do you know who is going to win the World Cup ?',
//   linkYes: '/ready',
//   linkNo: '/info'
// }));
//
// app.get('/ready', (req, res) => res.render('index', {
//   question: 'Who will win then...'
// }));


app.listen(port, () => console.log(`Express is listening on port ${port}`));
