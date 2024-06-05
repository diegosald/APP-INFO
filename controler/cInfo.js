const mInfo = require('../modelo/mInfo')

const getInfo = (req,res) =>{
       res.status(200).json(mInfo())
            
}

module.exports = getInfo