const router = require('express').Router();
const routerProduk = require('./produk');

// GET localhost:8000/produk => Ambil data semua produk
router.use('/produk', routerProduk);

module.exports = router; 