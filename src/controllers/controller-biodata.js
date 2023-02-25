const config = require('../config/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDataBiodata = async (req, res) => {

    const data = await new Promise((resolve,reject) => {
        connection.query('SELECT * FROM biodata', function (error,rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        })
    })

    if (data) {
               res.send({
                         success: true,
                         message: 'berhasil ambil data',
                         data: data
               })
    }else{
        res.send({
                  success: false,
                  message: 'Gagal ambil data'
        })
    } }
  
    // menambahkan data
    const addDataBiodata = async(req, res) => {
        let data = {
            nama: req.body.nama,
            jenis_kelamin: req.body.jenis_kelamin,
            alamat: req.body.alamat
        }
        const result = await new Promise((resolve, reject) => {
             connection.query('INSERT INTO biodata SET ?', [data], function(error, rows) {
                if (rows) {
                    resolve(true);
                } else {
                    reject(false);
                };
             } );
        });
        if (result) {
            res.send({
                success: true,
                message: 'Berhasil menambahkan data',
            });
        } 
    }

    // mengubah data
    const editDataBiodata = async(req, res) => {
        let id = req.params.id;
        let dataEdit = {
            nama: req.body.nama,
            jenis_kelamin: req.body.jenis_kelamin,
            alamat: req.body.alamat
        }
        const result = await new Promise((resolve, reject) => {
             connection.query('UPDATE biodata SET ? WHERE id = ?;', [dataEdit,id], function(error, rows) {
                if (rows) {
                    resolve(true);
                } else {
                    reject(false);
                }
             } );
        });
        if (result) {
            res.send({
                success: true,
                message: 'Berhasil mengedit data',
            });
        } else{ 
            res.send({
                success: false,
                message: 'Gagal mengedit data',
        });
    }
}

// menghapus data
const deleteDataBiodata = async(req, res) => {
    let id = req.params.id;
    
    const result = await new Promise((resolve, reject) => {
         connection.query('DELETE FROM biodata WHERE id = ?;', [id], function(error, rows) {
            if (rows) {
                resolve(true);
            } else {
                reject(false);
            };
         } );
    });
    if (result) {
        res.send({
            success: true,
            message: 'Berhasil menghapus data',
        });
    } else{ 
        res.send({
            success: false,
            message: 'Gagal menghapus data',
    });
}
}

    module.exports = {
        getDataBiodata,
        addDataBiodata,
        editDataBiodata,
        deleteDataBiodata
    }