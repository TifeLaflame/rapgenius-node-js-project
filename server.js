const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();
// const dotenv = require('dotenv');
console.log(process.env.API_KEY);

const app = express();
const port = 3000;

app.listen(port, () => console.log(`Starting server at http://localhost:${port}`));

app.use(express.static('public'));


app.get('/api', (req,res) => {

});