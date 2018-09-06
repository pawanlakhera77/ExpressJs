var express = require('express');
var app = express();
//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
   next();
});

var things = require('./things.js');
app.use('/things',things);

app.get('/', function(req, res){
   res.send("Get Hello world!");
});

app.post('/', function(req, res){
   res.send("Post Hello world!");
});

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
app.get('/:id', function (req, res) {
    res.send('The id you specified is ' + req.params.id);
});



app.listen(3000);
