'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScheduleStatusSchema extends Schema {
  up () {
    this.create('schedule_statuses', (table) => {
      table.string('status', 50).notNullable().unique()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('schedule_statuses')
  }
}

module.exports = ScheduleStatusSchema
