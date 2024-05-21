const jwt = require('jsonwebtoken');

const studentsModel = require('../models/studentsModel');



// Login with an existing user
const studentAuth = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const student = await studentsModel.findOne({ email });
        if (!student) {
            return res.status(404).json({ message: `Student not found with  this ${email} email ` });
        }

        const passwordMatch = await student.comparePassword(password);
        console.log(passwordMatch)

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }




        const token = jwt.sign({ studentID: student._id }, process.env.SECRET_KEY, {
            expiresIn: '5m'
        });
        res.json({ token });
    } catch (error) {
        next(error);
    }
};

module.exports = { studentAuth };