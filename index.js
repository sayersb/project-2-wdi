const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');


const databaseURI = 'mongodb://localhost/project-2-wdi';

mongoose.connect(databaseURI)
const router = require('./config/routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(ejsLayouts);


app.use(express.static(`${__dirname}/public`));

console.log(__dirname);


app.use(bodyParser.urlencoded({ extended: true}));


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


app.listen(4000, () => console.log('Express is listening on port 4000'));
