const {Router} = require('express')
const router = Router();

router.get('/', (req, res) => {
    res.render('form.hbs')
})

module.exports = router;