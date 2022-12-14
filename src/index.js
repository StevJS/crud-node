const express = require('express');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/index'));

app.listen(1234);
console.log('listening on http://localhost:1234');