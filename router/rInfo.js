const express = require('express');
const cInfo = require('../controler/cInfo')
const router = express.Router();

router.get('/',cInfo)

module.exports =  router