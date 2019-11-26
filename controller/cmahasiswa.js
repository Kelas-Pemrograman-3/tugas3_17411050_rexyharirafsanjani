const mahasiswaModel = require('../models/mahasiswa')

exports.insertmahasiswa = (data) =>
  new Promise((resolve, reject) => {
    mahasiswaModel.create(data)
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