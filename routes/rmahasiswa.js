const mahasiswa = require('express')()
const mahasiswaController = require('../controller/cmahasiswa')

mahasiswa.post('/insert',(req, res) => {
    mahasiswaController.insertmahasiswa(req.body)
    .then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = mahasiswa