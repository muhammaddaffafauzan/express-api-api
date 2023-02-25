const router = require('express').Router();
const routerProduk = require('./produk');
const routerBiodata = require('./biodata');

// GET localhost:8000/produk => Ambil data semua produk
router.use('/produk', routerProduk);
router.use('/biodata', routerBiodata);

module.exports = router; 
