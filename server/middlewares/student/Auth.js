const jwt = require('jsonwebtoken');
const studentModel = require("../../models/studentsModel");

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authentication required' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const student = await studentModel.findById(decodedToken.studentId);
        if (!student) {
            return res.status(404).json({ message: 'student not found' });
        }

        req.student = student;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = { authenticate };