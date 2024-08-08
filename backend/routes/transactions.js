const { addIncome } = require('../controllers/income');

const router = require('express').Router();

router.post('/add-income',addIncome)

module.exports=router;

