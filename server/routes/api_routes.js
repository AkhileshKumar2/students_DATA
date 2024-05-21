const express = require('express');
const router = express.Router();

const { authenticate } = require('../middlewares/student/Auth');
const { studentAuth } = require('../controllers/studentAuth');
//const { getAlltasks } = require('../controllers/tasks')
const { getAllStudents,
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent } = require('../controllers/studentsController');




router.route('/').get(getAllStudents).post(createStudent);
router.route('/:id').get(getStudent).patch(updateStudent).delete(deleteStudent)
router.post('/login', studentAuth)




module.exports = router; 
