const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const fs = require('fs');
const path = require('path');

const homeRoutes = require('./routes/home')
const formRoutes = require('./routes/form')

const formAddRoutes = require('./routes/formAdd')

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use('/', homeRoutes)
app.use('/form', formRoutes)

app.use(express.urlencoded({extended: true}))
app.use('/form', formAddRoutes)

app.use('/public', express.static('static'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`)
})



