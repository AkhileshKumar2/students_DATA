const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



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
        required: [true, 'student phone number required']
    },

    password: {

        type: String,
        required: [true, "Please Enter your password"],

    }

})


//Hash the password before saving it to the database
//if we uncomment the below code then the password comparision will fails and always returns false so keep it commnent
// studentSchema.pre('save', async function (next) {
//     const student = this;
//     if (!student.isModified('password')) return next();

//     try {
//         const salt = await bcrypt.genSalt();
//         student.password = await bcrypt.hash(student.password, salt);
//         next();
//     } catch (error) {
//         return next(error);
//     }
// });

//Compare the given password with the hashed password in the database
// studentSchema.methods.comparePassword = async function (password) {
//     return await bcrypt.compare(password, this.password);
// };
//OR

studentSchema.methods.comparePassword = async function (password) {
    try {
        console.log(password)
        console.log(this.password)
        const result = await bcrypt.compare(password, this.password);
        console.log('Password comparison result:', result);

        return result;
    } catch (error) {
        console.error('Error comparing passwords:', error);
        throw new Error('Error comparing passwords');
    }
};




module.exports = mongoose.model('Student', studentSchema)