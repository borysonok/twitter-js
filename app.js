const chalk = require('chalk');
const express = require("express");
const app = express();





app.get('/', function(req, res){
    res.send('Welcome to my MAIN webpage...');
});

app.get('/news', function(req, res){
    res.send('This is a NEWS page...');
});



app.listen(3000, function(){
    //console.log('server is listening...');
    process.stdout.write(chalk.blue('Server is listening...'));
});


