'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/ScheduleStatus', (faker, i, data) => {
  return {
    status: data.status
  }
})

Factory.blueprint('App/Models/User', (faker, i, data) => {
  return {
    username: data.username,
    password: data.password
  }
})

Factory.blueprint('App/Models/Event', (faker, i, data) => {
  return {
    status: data.status,
    name: data.name
  }
})
  Factory.blueprint('App/Models/EventDate', (faker, i, data) => {
    return {
      event_date: data.event_date,
      event_id: data.event_id
    }
})
  Factory.blueprint('App/Models/EventTime', (faker, i, data) => {
      return {
        event_time: data.event_time,
        event_id: data.event_id
      }
})
  Factory.blueprint('App/Models/AvailableDate', (faker, i, data) => {
        return {
          date: data.date,
          application_id: data.application_id
        }
})
Factory.blueprint('App/Models/AvailableTime', (faker, i, data) => {
          return {
            time: data.time,
            application_id: data.application_id
          }
})
Factory.blueprint('App/Models/Application', (faker, i, data) => {
        return {
          twitch_name: data.twitch_name,
          discord_name: data.discord_name,
          twitter_name: data.twitter_name,
          game_1: data.game_1,
          game_2: data.game_2,
          donation_incentive: data.donation_incentive,
          info: data.info,
          backup: data.backup,
          event_id: data.event_id
      }
})
