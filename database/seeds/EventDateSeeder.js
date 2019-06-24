'use strict'

/*
|--------------------------------------------------------------------------
| EventDateSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class EventDateSeeder {
  async run () {
    await Factory.model('App/Models/EventDate').create(
      {
        event_date: 'june 2',
        event_id: 1
      }
    )

    await Factory.model('App/Models/EventDate').create(
    {
        event_date: 'june 1',
        event_id: 1
      }
    )
  }
}

module.exports = EventDateSeeder
