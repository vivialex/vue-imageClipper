const express = require('express'),
    path = require('path');

let app = express(),
    port = 3030;

app.use('/static', express.static('dist'));
app.listen(port, () => {
    console.log('listening at ' + port + ' port');
});