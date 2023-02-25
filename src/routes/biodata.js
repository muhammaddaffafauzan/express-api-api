const router = require('express').Router();
const { biodata } = require('../controllers');

router.get('/', biodata.getDataBiodata);
router.post('/add', biodata.addDataBiodata);
router.put('/edit/:id', biodata.editDataBiodata);
router.delete('/delete/:id', biodata.deleteDataBiodata);

module.exports = router;