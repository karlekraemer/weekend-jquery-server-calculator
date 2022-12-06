const express = require('express');

const app = express();
const port = 5033;

app.use(express.static('server/public'));

app.listen(port, () => {
    console.log('listening on port, ', port);
    // server console.logs ONLY shot up in the terminal
} );

const solutions = require('./modules/solutions');


// app.get('', function(req, res) {
//         // '/quotes' is our route
//     console.log("request for /quotes was made");
//     res.send(solutions);
//     // res.sendStatus(418);
// } );

app.post('/', function(req, res) {
    console.log('in the post request!', req.body);
   if (req.body.text && req.body.author) {
        solutions.push(req.body);
        // console.log('NEW QUOTES', quoteList);
        res.sendStatus(201);
        // 201 = a status!
   } else {
        res.sendStatus(500);
   } 
});
