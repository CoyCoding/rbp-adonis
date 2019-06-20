'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ApplicationsSchema extends Schema {
  up () {
    this.create('applications', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('applications')
  }
}

module.exports = ApplicationsSchema
