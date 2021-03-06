const express = require('express')
const axios = require('axios');
const {machineId, machineIdSync} = require('node-machine-id');
const app = express()
const os = require('os');
const { doesNotMatch } = require('assert');
const publicIp = require('public-ip');
const port = 39943
const master = "http://127.0.0.1:3333"  // here you 


let registerData = {
  "hostname": os.hostname(),
  "os":os.platform(),
  "port":port,
  "ip" : "127.0.0.1",
  "uid":machineIdSync({original: true})

}

axios.put(master+'/c2/register-c2/', registerData).catch(function (error) {
  // console.log(error);

})



app.use(express.json());

app.post('/', (req, res) => {

  console.log(typeof(req.body))
  if(typeof(req.body)=="object"){

    //req.body
    // send data to master
    res.status(200);

  }
  res.status(400);
  
})


app.post('/test', (req, res) => {
    res.send('Hello World!')
})
  
// server status infos
app.get('/server-status', (req,res) => {

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
