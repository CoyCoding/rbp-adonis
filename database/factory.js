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
