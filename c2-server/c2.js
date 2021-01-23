const express = require('express')
const axios = require('axios');
const app = express()
const os = require('os');
const port = 39943
const master = "http://127.0.0.1:3333" 

function IsJsonString(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}
app.use(express.json());

app.post('/', (req, res) => {

  axios.post('/user', {
    os: 'sss',
    test: 'aaa'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

})

app.post('/register-bot', (req, res) => {

  console.log(typeof(req.body))
  if(typeof(req.body)=="object"){

    // send data to master
    axios.put(master+'/register-bot', req.body)
    .then(function (response) {
      console.log(response);

      res.status(200);
    })
    .catch(function (error) {
      console.log(error)

    });
    
    res.status(200);

  }
  res.status(400);
  
})


app.post('/test', (req, res) => {
    res.send('Hello World!')
})
  
// server status infos
app.get('/server-status', (res) => {

  let servStatus = {
    "hostname": os.hostname(),
    "uptime":os.uptime(),
    "totalmem":os.totalmem(),
    "freemem":os.freemem(),
    "netwroks":os.networkInterfaces(),
    "cpus":os.cpus(),
    "platfrom":os.platform(),
    "release":os.release(),
    "user":os.userInfo(),
    "arch":os.arch(),
    "type":os.type()
  }

  res.send(servStatus)
})

// run app on public 
app.listen(port, '0.0.0.0');
