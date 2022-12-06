const express = require('express');

const app = express();
const port = 5033;

app.use(express.static('server/public'));
app.use(express.urlencoded());

const solutions = require('./modules/solutions');

app.listen(port, () => {
    console.log('listening on port, ', port);
    // server console.logs ONLY shot up in the terminal
} );


app.get('/solutions', function(req, res) {
     console.log('request for /solutions was made');
     res.send(solutions);
 } );
 

app.post('/solutions', function(req, res) {
    console.log('in the post request!', req.body);
   if (req.body.firstNumber && req.body.secondNumber) {
        solutions.push(req.body);
        // console.log('NEW QUOTES', quoteList);
        res.sendStatus(201);
        // 201 = a status!
   } else {
        res.sendStatus(500);
   } 
});
