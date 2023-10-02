const {Activities} = require('../db')

module.exports = async(req,res)=>{
try {
    const allActivities = await Activities.findAll();
    allActivities.length !== 0
    ? res.status(200).json(allActivities)
    : res.status(400).send('Activities not found');
} catch (error) {
 return res.status(500).send(error.message)   
}

}