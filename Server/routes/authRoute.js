const express = require('express');
const { userRegister, userLogin } = require('../controllers/authController');

const authRouter = express.Router();

// router.get('/', hello);
// router.get('/lol', lol);

authRouter.post('/userRegister', userRegister)
authRouter.post('/userLogin', userLogin)

module.exports = authRouter;