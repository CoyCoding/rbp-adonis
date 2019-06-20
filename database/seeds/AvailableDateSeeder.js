'use strict'

/*
|--------------------------------------------------------------------------
| AvailableDateSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AvailableDateSeeder {
  async run () {

    await Factory.model('App/Models/Event').create({status: 'takingApplications', name: 'test rbp'})

    await Factory.model('App/Models/Application').create({
      twitch_name: 'data.twitch_name',
      discord_name: 'data.discord_name',
      twitter_name: 'data.twitter_name',
      game_1: 'data.game_1',
      game_2: 'data.game_2',
      donation_incentive: 'data.donation_incentive',
      info: 'data.info',
      backup: false,
      event_id: 1
    })

  }
}

module.exports = AvailableDateSeeder
