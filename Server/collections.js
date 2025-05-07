const client = require('./connect');


const usersCollection = client.db("UAP-Hackathon").collection("users");
const companyCollection = client.db("UAP-Hackathon").collection("companies");
const jobCollection = client.db("UAP-Hackathon").collection("jobs");


module.exports = { usersCollection, companyCollection, jobCollection }
