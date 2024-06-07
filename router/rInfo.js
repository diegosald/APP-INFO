const express = require('express');
const cInfo = require('../controler/cInfo')
const router = express.Router();

router.get('/',cInfo)
/*router.get('/*',function(req, res){
    res.status("404").send("No existe", req.url)
})*/

module.exports =  router