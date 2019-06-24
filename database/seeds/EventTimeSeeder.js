'use strict'

/*
|--------------------------------------------------------------------------
| EventTimeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class EventTimeSeeder {
  async run() {
    await Factory.model('App/Models/EventTime').create({
      event_time: '12:00 AM - 2:00 AM',
      application_id: 1
    })
    await Factory.model('App/Models/EventTime').create(

      {
        event_time: '2:00 AM - 4:00 AM',
        application_id: 1
      }
    )
    await Factory.model('App/Models/EventTime').create({
      event_time: '4:00 AM - 6:00 AM',
      application_id: 1
    })
    await Factory.model('App/Models/EventTime').create(

      {
        event_time: '6:00 AM - 8:00 AM',
        application_id: 1
      }

    )
    await Factory.model('App/Models/EventTime').create(

      {
        event_time: '8:00 AM - 10:00 AM',
        application_id: 1
      }

    )
    await Factory.model('App/Models/EventTime').create(
      {
        event_time: '10:00 AM - 12:00 PM',
        application_id: 1
      }
    )
    await Factory.model('App/Models/EventTime').create({
      event_time: '12:00 PM - 2:00 PM',
      application_id: 1
    })
    await Factory.model('App/Models/EventTime').create(

      {
        event_time: '2:00 PM - 4:00 PM',
        application_id: 1
      }
    )
    await Factory.model('App/Models/EventTime').create(

      {
        event_time: '4:00 PM - 6:00 PM',
        application_id: 1
      }
    )
    await Factory.model('App/Models/EventTime').create({
      event_time: '6:00 PM - 8:00 PM',
      application_id: 1
    })
    await Factory.model('App/Models/EventTime').create(

      {
        event_time: '8:00 PM - 10:00 PM',
        application_id: 1
      }
    )
    await Factory.model('App/Models/EventTime').create({
      event_time: '10:00 PM - 12:00 AM',
      application_id: 1
    })

  }
}

module.exports = EventTimeSeeder
