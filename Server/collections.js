const client = require('./connect');


const usersCollection = client.db("UAP-Hackathon").collection("users");
const companyCollection = client.db("UAP-Hackathon").collection("companies");


module.exports = { usersCollection, companyCollection }
