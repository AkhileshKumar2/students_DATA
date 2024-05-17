const student_Model = require('../models/studentsModel');

// Get all the Students records
const getAllStudents = async (req, res) => {
    try {
        const students = await student_Model.find({})
        res.status(200).json({ success: true, students })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
};

// TO add student_Models
const createStudent = async (req, res) => {
    try {
        const student = await student_Model.create(req.body)
        res.status(201).json({ success: true, student })

    } catch (error) {
        res.status(500).json({ msg: error })

    }


}
// To get the student by _id 
const getStudent = async (req, res) => {
    try {
        const { id: studentID } = req.params
        const student = await student_Model.findOne({ _id: studentID })
        if (!student) {
            return res.status(404).json({ success: false, msg: `No student exist with this id: ${studentID}` })
        }
        return res.status(200).json({ success: true, message: `student with id:${studentID} is`, student });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
//To update the student
const updateStudent = async (req, res) => {
    try {
        const { id: studentID } = req.params
        const student = await student_Model.findByIdAndUpdate({ _id: studentID }, req.body, {
            new: true, runValidators: true
        })
        if (!student) {
            res.status(404).json({ success: true, msg: `No student with id: ${studentID}` })
        }
        res.status(200).json({ success: true, student, message: `student with id:${studentID} has been updated` })

    } catch (error) {

        res.status(500).json({ msg: error })
    }
}


//to delete the  student 
const deleteStudent = async (req, res) => {
    try {

        const { id: studentID } = await req.params
        const student = await student_Model.findByIdAndDelete({ _id: studentID })
        if (!student) {
            return res.status(404).json({ msg: `No student with id: ${studentID}` })
        }
        await res.status(200).json({ student, message: `student with id:${studentID} has been deleted` })
    } catch (error) {
        res.status(500).json({ msg: error })

    }
}

module.exports = {
    getAllStudents,
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent


}