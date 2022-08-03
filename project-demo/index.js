const express = require('express')
const logger = require('./middleware/logger')
const courses = require('./routes/courses')
const home = require('./routes/home')
const app = express()

/* CONFIG */
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

/* MIDDLEWARE */
app.use(logger)

/* ROUTES */
app.use('/', home)
app.use('/api/courses', courses)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
