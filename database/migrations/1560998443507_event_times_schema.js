'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventTimesSchema extends Schema {
  up () {
    this.create('event_times', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('event_times')
  }
}

module.exports = EventTimesSchema
