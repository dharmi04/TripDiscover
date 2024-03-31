const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log(token)
        if (!token) return res.status(401).json({ message: "Unauthorized" })
        
        const decoded = jwt.verify(token, process.env.SECRET)
        req.user = decoded
        next()
    }
    catch(error){
        return res.status(401).json({ message: "Unauthorized" })
    }
    }

    module.exports = verifyToken