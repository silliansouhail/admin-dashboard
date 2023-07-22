const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

//database
const connect = require('./helpers/dbConnect')

//routes
const clientRoutes = require('./router/client')
const generalRoutes = require('./router/general')
const managementRoutes = require('./router/management')
const salesRoutes = require('./router/sales')



/* Configuration */
dotenv.config()
const app = express()
app.use(express.json())

app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false}))
app.use(cors())

// Connection to the database
connect()

/* Routes Configuration */
app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/management", managementRoutes)
app.use("/sales", salesRoutes)

const port = process.env.CONNECTIONS_PORT || 9000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


