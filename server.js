const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api'); //api route

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.urlencoded({extended:true})); //parses text as url encoded data
app.use(bodyParser.json()); //this parses text as json

app.use('/api',api); //on /api map api folder

//other than api folder map to index.html

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

//now with localhost:3000 server.js executes index.html and localhost:3000/api executes api folder related api's.
app.listen(port,function(){
    console.log('server running on localhost:'+port);
});
