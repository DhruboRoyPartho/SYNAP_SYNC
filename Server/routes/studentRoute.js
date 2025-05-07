const express = require('express');
const { studentInfo } = require('../controllers/StudentController');

const studentRouter = express.Router();

// router.get('/', hello);
// router.get('/lol', lol);

studentRouter.get('/studentInfo', studentInfo)
// studentRouter.post('/userLogin', userLogin)

module.exports = studentRouter;