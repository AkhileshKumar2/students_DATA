const mongoose = require('mongoose');
const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const studentSchema = new mongoose.Schema({
    f_name: {
        type: String,
        required: [true, 'Please Enter your first name']
    },
    l_name: {
        type: String,
        required: [true, "Please Eneter your Last name"]
    },

    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone: {
        type: String,
        // validate: {
        //     validator: function (v) {
        //         return /\d{3}-\d{3}-\d{4}/.test(v);
        //     },
        //     message: props => `${props.value} is not a valid phone number!`
        // },
        required: [true, 'User phone number required']
    },

    password: {

        type: String,
        required: [true, "Please Enter your password"]
    }

})


module.exports = mongoose.model('students', studentSchema)