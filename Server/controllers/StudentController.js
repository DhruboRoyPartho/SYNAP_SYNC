const {usersCollection} = require('../collections');

// get student info
const studentInfo = async (req, res) => {
    const userEmail = req.query.email;

    console.log(userEmail);

    const query = { email: userEmail };
    
    const result = await usersCollection.findOne(query);
    console.log("result = ", result);

    res.send(result);
};


module.exports = {
    studentInfo
}

