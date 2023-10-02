const {Country} = require('../db')

module.exports = async(req,res)=>{
    try {
        console.log('searching cities')
        const countrys = await Country.findAll();
        return res.status(200).json(countrys)
    } catch (error) {
        return res.status(500).send(error.message)
    }

}