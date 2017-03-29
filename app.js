const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const webRouter = require('./router');
const config = {
  'host': 'localhost',
  'port': 3000
}

// cors
const whitelist = ['http://localhost:8080', 'http://10.10.11.115:8080'];

const corsOptionsDelegate = function(req, callback){
  let corsOptions;
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

app.use('/', webRouter);

app.listen(config.port, function () {
  console.log('MockServer listening at http://%s:%s', config.host, config.port)
});