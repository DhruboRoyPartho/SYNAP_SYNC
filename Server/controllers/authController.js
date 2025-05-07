
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "process.env.SECRET_KEY";


const {usersCollection, companyCollection} = require('../collections');

// Create New User
const userRegister = async (req, res) => {
    const user = req.body;

    console.log(user);

    const query = { email: user.email };
    const existingUser = await usersCollection.findOne(query);
    if (existingUser) {
        return res.send({ message: 'user already exist!', insertedId: null })
    }

    const salt = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, salt)

    const userInfo = {
        name: req.body.name,
        email: req.body.email,
        type: req.body.type,
        password: securePassword,
    }
    const result = await usersCollection.insertOne(userInfo);

    res.send(result);
};



// User Login

const userLogin = async (req, res) => {
    const { email, password, userType } = req.body;

    // console.log('email, pin, userType', email, password, userType);

    const query = { email: email };
    let user = {};

    if (userType == 'Company') {
        user = await companyCollection.findOne(query);
    }
    else {
        user = await usersCollection.findOne(query);
    }


    if (user) {
        const isPinValid = await bcrypt.compare(password, user.password);
        if (isPinValid) {
            // console.log('User exists:', user);

            const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1d' });
            res.json({ token, user });


            // return res.send({ user: true, pin: true, type: user.type });
        } else {
            console.log('Invalid pin');
            return res.send({ user: true, pin: false });
        }
    } else {
        console.log('User does not exist');
        return res.send({ user: false });
    }

}



module.exports = {
    userRegister,
    userLogin
}