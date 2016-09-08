var express = require( 'express' );
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

var portDecision = process.env.PORT || 8080;

app.listen( portDecision, function( req, res ){
  console.log( 'server listening on port 8080' );
}); //end app.listen

app.get('/', function(req, res){
  console.log('base URL hit');
  res.sendFile(path.resolve('public/index.html'));
});

app.post('/pathName', urlencodedParser, function(req, res){
  console.log('pathName hit', req.body);
  res.send(req.body);
});

app.use(express.static('public'/*folderName*/));
