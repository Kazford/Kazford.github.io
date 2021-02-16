const {Router} = require('express');
const Student = require('../models/students')
const router = Router()

const student = require('../data/students.json');

router.get('/', async (req, res) => {
    const students = await Student.getAll()
    res.render('index.hbs', {
        students
    })
})



module.exports = router;