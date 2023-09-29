const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const countries = require('./src/controllers/countries')
const PORT = 3001;


conn.sync({ force: true }).then(() => {
  countries(),
  console.log(countries)
  server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
