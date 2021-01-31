'use strict'

let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// router
let routerCustomer = require('./src/router/routerCustomer')
let routerDriver = require('./src/router/routerDriver')
let routerProduct = require('./src/router/routerProduct')
let routerOrder = require('./src/router/routerOrder')

let routerOrderItem = require('./src/router/routerOrderItem')

routerCustomer(app)
routerDriver(app)
routerProduct(app)
routerOrder(app)

routerOrderItem(app)

app.listen(port)
console.log(`RESTful API server started on:${port}`)
