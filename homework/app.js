const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false}));



app.set('view engine', 'pug');





app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.get('/getData', (req, res) => {
    const number = req.query.number;
   
  if (!number) {
    res.send('Lack of Parameter');
    return; 
  }
  
  if (number === 'POSITIVE_INTEGER') {
    res.send('POSITIVE_INTEGER.');
    return;
  }


  const num = parseInt(number);

  if (isNaN(num) || num <= 0) {
    res.send('Wrong Parameter');
    return; 
  }

  const result = (num * (num + 1)) / 2;

//   const result2 = ((num * (num + 1)) / 2) + '+' + stringWord;

  res.send(`Result: ${result}`);


  if (number === 'POSITIVE_INTEGER') {

    res.send('POSITIVE_INTEGER');
    return;
  }

});



app.get('/myName', (req, res) => {
  const username = req.cookies.username;

  
  if (username) {
    res.send(`Welcome, ${username}!`);
  } else {
    res.render('hello');
  }
});


app.post('/trackName', (req, res) => {
  const { username } = req.body;


  res.cookie('username', username);
  res.redirect('/myName');
});





app.listen(3000);







