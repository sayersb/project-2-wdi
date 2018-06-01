const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);


app.get('/', (req, res) => res.render('index', {
  question: 'Do you know who is going to win the World Cup ?',
  linkYes: '/ready',
  linkNo: '/info'
}));


app.listen(4000, () => console.log('Express is listening on port 4000'));
