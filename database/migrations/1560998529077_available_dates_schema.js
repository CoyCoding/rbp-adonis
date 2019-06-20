'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvailableDatesSchema extends Schema {
  up () {
    this.create('available_dates', (table) => {
      table.increments()
      table.string('date').notNullable()
      table.integer('application_id').unsigned().references('id').inTable('applications')
      table.timestamps()
    })
  }

  down () {
    this.drop('available_dates')
  }
}

module.exports = AvailableDatesSchema
