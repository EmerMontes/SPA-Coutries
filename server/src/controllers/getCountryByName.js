const {Country} = require('../db')
const { Op } = require('sequelize');


module.exports = async(req,res)=>{
    try {
        const name = req.query.name
        const names = await Country.findAll({where:{name:{
          [Op.iLike]: `${name}%`
        }}})
        names.length !== 0
        ? res.status(200).json(names) 
        : res.status(402).send('City name not found') 
    } catch (error) {
        return res.status(500).send(error.message)
    }
}