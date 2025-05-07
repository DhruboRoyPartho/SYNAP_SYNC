const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const mongoose_connect = mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB connected');
});


module.exports = mongoose_connect;