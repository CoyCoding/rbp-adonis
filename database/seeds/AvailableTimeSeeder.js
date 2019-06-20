'use strict'

/*
|--------------------------------------------------------------------------
| AvailableTimeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AvailableTimeSeeder {
  async run() {
    await Factory.model('App/Models/AvailableTime').create({
      time: '12:00 AM - 2:00 AM',
      application_id: 1
    })
    await Factory.model('App/Models/AvailableTime').create({
      time: '2:00 AM - 4:00 AM',
      application_id: 1
    })
  }
}

module.exports = AvailableTimeSeeder
