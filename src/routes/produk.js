const router = require('express').Router();
const { produk } = require('../controllers');

// GET localhost:8080/produk => Ambil data semua produk
router.get('/', produk.getDataProduk);

// // GET localhost:8080/produk/2 => Ambil data semua produk berdasarkan id -2
// router.get('/:id', produk.getDataProduk);

// // // POST localhost:8080/produk/add => Tambah data produk ke database
router.post('/add', produk.addDataProduk);

// // // POST localhost:8080/produk/2 => edit data produk
// router.put('/edit/:id, produk.editDataProduk');

// // // POST localhost:8080/produk/delete => delete data produk
// router.delete('/delete/:id', produk.deleteDataProduk);

module.exports = router;