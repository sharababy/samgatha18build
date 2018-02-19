var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', process.env.PORT || 3001);

app.use(express.static(path.join(__dirname, 'build')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});



/*
	
	old: samgatha-new-2018-dev.ap-south-1.elasticbeanstalk.com

*/