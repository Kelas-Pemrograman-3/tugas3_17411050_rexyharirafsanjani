const mongoose = require('mongoose')
const schema = mongoose.Schema
const matakuliahSchema = new schema({
    KodeMk: {
        type: String
    },
    NamaMk: {
        type: String
    },
    Sks: {
        type: String
    },
    Ruangan: {
        type: String
    },
    Jam: {
        type: String
    },
    Dosen: {
        type: String
    }
})

module.exports = mongoose.model('matakuliah', matakuliahSchema)