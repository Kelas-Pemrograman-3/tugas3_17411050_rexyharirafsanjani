const matakuliah = require('express')()
const matakuliahController = require('../controller/cmatakuliah')

matakuliah.post('/insertmk',(req, res) => {
    matakuliahController.insertmatakuliah(req.body)
    .then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = matakuliah