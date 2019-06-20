'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventDatesSchema extends Schema {
  up () {
    this.create('event_dates', (table) => {
      table.increments()
      table.string('event_date').notNullable()
      table.integer('event_id').unsigned().references('id').inTable('Events')
      table.timestamps()
    })
  }

  down () {
    this.drop('event_dates')
  }
}

module.exports = EventDatesSchema
