'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatabaseSeeder {
  async run () {
    // await Factory.model('App/Models/ScheduleStatus').create({status: 'takingApplications'});
    // await Factory.model('App/Models/ScheduleStatus').create({status: 'offseason'});
    // await Factory.model('App/Models/ScheduleStatus').create({status: 'applicationsClosed'});
    // await Factory.model('App/Models/ScheduleStatus').create({status: 'scheduleFinished'});
  }
}

module.exports = DatabaseSeeder
