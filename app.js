var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var config = {
  'host': 'localhost',
  'port': 3000
}
var APIs = require('./apis');

// cors
var whitelist = ['http://localhost:8080', 'http://10.10.11.115:8080'];

var corsOptionsDelegate = function(req, callback){
  var corsOptions;
  if(whitelist.indexOf(req.header('Origin')) !== -1){
    corsOptions = { origin: true, credentials: true }; // reflect (enable) the requested origin in the CORS response
  }else{
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// for (let i = 0; i < APIs.length; i++) {
//   var item = APIs[i];
//   console.log(item);
//   app.use(item.url, function (req, res, next) {
//     console.log('request');
//     res.json(require('./api/' + item.moduleName));
//   })
// }
app.get('/grabredenvelope/newrewards', function(req, res) {
	res.json(require('./api/newrewards'))
});

app.get('/xc_v6/FestivalApi/time_range', function(req, res) {
	res.json(require('./api/datelist'))
});


app.listen(config.port, function () {
  console.log('MockServer listening at http://%s:%s', config.host, config.port)
});