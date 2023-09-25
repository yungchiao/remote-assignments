

const express = require('express');
const app = express();

app.use(express.static('view'));

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.get('/getData', (req, res) => {
    const number = req.query.number;
    // const stringWord = 'POSITIVE_INTEGER';
    // const stringWordParam = req.query.stringWord;
    // const stringXYZ = 'xyz';

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
// app.get('/sum.html', (req, res)=>{
//     if(number===''){
//         res.send('Lack of Parameter');
//     }
// })




app.listen(3000);