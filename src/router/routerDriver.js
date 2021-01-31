'use strict'

module.exports = async function (app) {
  const drivers = require('../controller/DriverController')

  app.get('/drivers',drivers.getAllDataDrivers)
  app.get('/drivers/getDriversById/:id',drivers.getDriversById)
  app.post('/drivers/addNewDrivers',drivers.createDrivers)
  app.put('/drivers/updateDrivers/:id',drivers.updateDrivers)

  app.delete('/drivers/deleteDrivers/:id',drivers.deleteDrivers)

  // driver update status order
  app.put('/drivers/updateStatusOrderDrivers/:id',drivers.updateStatusOrderDrivers)
}
