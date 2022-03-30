const express = require('express');
const {login,logout} = require('../controllers/auth.controller');
const router = express.Router();
const {protect} = require('../middleware/auth')

router.post('/login',login)
router.post('/logout',protect,logout)

module.exports = router