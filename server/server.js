const express = require('express');

const app = express();
const port = 5033;

app.use(express.static('server/public'));

app.listen(port, () => {
    console.log('listening on port, ', port);
    // server console.logs ONLY shot up in the terminal
} );