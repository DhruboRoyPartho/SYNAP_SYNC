const SECRET_KEY = "process.env.SECRET_KEY";


const verifyToken = (req, res, next) => {
    // console.log('inside verify', req.headers.authorization);
    if (!req.headers.authorization) {
        return res.status(401).send({ message: 'Unauthorized access!' })
    }
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Unauthorized access!' })
        }
        req.decoded = decoded;
        next();
    })
}

module.exports={
    verifyToken
}