const {Country}=require('../db')
const {countries} = require('../../api/db')

module.exports = async(req,res)=>{
    
    try {
        const country= countries.map(country => (
            {
             ID: country.cca3,
             name: country.name.common,
             imgFlag: country.flags.svg,
             continent: country.continents,
             capital: country.capital, 
             subregion: country.subregion,
             area: String(country.area), 
             population: String(country.population),
         }));
        await Country.bulkCreate(country)
        res.status(200).send('Countries save')
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}