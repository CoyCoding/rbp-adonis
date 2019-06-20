'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvailableTimesSchema extends Schema {
  up () {
    this.create('available_times', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('available_times')
  }
}

module.exports = AvailableTimesSchema
