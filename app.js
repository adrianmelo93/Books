var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./Book.model.js');
var port = 8080;

var db = 'mongodb://localhost/library';
mongoose.connect(db);

app.get('/', function(req, res){
  console.log('Hey what up');
  res.send('Hey  I am here');
});

app.get('/books', function(req, res){
  console.log('Getting Books');
  Book.find({})
  .exec (function(err, books){
    if(err){
      res.send('err has ocurred')
    }else{
      console.log(books);
      res.json(books);
    }
  });
});
app.get('/book/:id', function(req, res){
  Book.findOne({
    _id: req.params.id
  })
  .exec(function(err, book){
if(err){
  res.send('error has ocurred');
}else{
  res.json(book);
}
  });
});

app.listen(port, function(){
console.log(`Listening on port ${port}`);

});
