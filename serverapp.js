var express = require('express'),
       http = require('http'),
       path = require('path'),
   	app = express();

app.use(express.static(path.join(__dirname,'public')));

app.all('*', function(req,res){
    res.sendfile('public/bubbles.html')
});

http.createServer(app).listen(8000);
