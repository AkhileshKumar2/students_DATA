const express = require('express');
const router = express.Router();

//const { getAlltasks } = require('../controllers/tasks')
const { getAllStudents,
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent } = require('../controllers/studentsController');




router.route('/').get(getAllStudents).post(createStudent);
router.route('/:id').get(getStudent).patch(updateStudent).delete(deleteStudent)




module.exports = router; 
