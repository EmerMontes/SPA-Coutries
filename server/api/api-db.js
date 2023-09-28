const fs = require('fs')

const countries = JSON.parse(fs.readFileSync('./db.json'));

module.exports = {countries};