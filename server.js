//------------ beberapa Metode
 
// get
// post
// put
// delete
 
// server.get('/user/register', (req, res)=>{
//     res.send('<h1> Halaman Registrasi</h1>')
// })
 
const server = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 5000
 
const mongoURI = 'mongodb://127.0.0.1/dblatihan'
 
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connect to db success')
}).catch(err => {
  console.log('Error : ' + err)
})
 
server.use(bodyParser.json({
  extended: true,
  limit: '50mb'
}))
 
server.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}))
 
// list Router
server.use('/mahasiswa', require('./routes/rmahasiswa'))
 
server.use('/matakuliah', require('./routes/rmatakuliah'))
 
server.listen(port, function () {
  console.log('Server Started on port' + port);
})