const {Router} = require('express')
const Students = require('../models/students')
const router = Router()


router.post('/', async (req, res) => {
  console.log(req.body)
  const course = new Students(
    req.body.name,
    req.body.one,
    req.body.two,
    req.body.three,
    req.body.four,
    req.body.five,
    req.body.six,
    req.body.seven,
    req.body.eight
  )
  await course.save()

  res.redirect('/');
})

module.exports = router;