const express = require('express');
const cors = require('cors');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174']
}
app.use(cors(corsOptions))
app.use(express.json());

const client = require('./connect')

// Sj09OMsQALylEaET
// Tashdik



// Routes
const authRouter = require('./routes/authRoute');
const jobRoute = require('./routes/jobRoute');


app.use('/auth', authRouter);
app.use('/job', jobRoute);




app.get('/', (req, res) => {
    res.send('server is on');
})
app.listen(port, () => {
    // console.log(process.env.MONGO_URI)
    console.log(`server is on port ${port}`);
})


