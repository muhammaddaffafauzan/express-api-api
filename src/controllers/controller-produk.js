const config = require('../config/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDataProduk = async (req, res) => {

    const data = await new Promise((resolve,reject) => {
        connection.query('SELECT * FROM produk', function (error,rows) {
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
    const addDataProduk = async(req, res) => {
        let data = {
            nama: req.body.nama,
            harga: req.body.harga,
            stok: req.body.stok
        }
        const result = await new Promise((resolve, reject) => {
             connection.query('INSERT INTO produk SET ?', [data], function(error, rows) {
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

    module.exports = {
        getDataProduk,
        addDataProduk
    }