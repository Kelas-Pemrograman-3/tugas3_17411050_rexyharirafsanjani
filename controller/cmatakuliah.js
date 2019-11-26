const matakuliahModel = require('../models/matakuliah')

exports.insertmatakuliah = (data) =>
  new Promise((resolve, reject) => {
    matakuliahModel.create(data)
      .then(res => {
        resolve({
          eror: false,
          pesan: 'Berhasil Input Data'
        })
      }).catch(() => {
        reject({
          eror: true,
          pesan: 'Gagal Input Data'
        })
      })
  })