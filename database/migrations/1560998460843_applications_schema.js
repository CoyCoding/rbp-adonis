'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ApplicationsSchema extends Schema {
  up () {
    this.create('applications', (table) => {
      table.increments()
      table.string('twitch_name').notNullable()
      table.string('discord_name').notNullable()
      table.string('twitter_name')
      table.string('game_1').notNullable()
      table.string('game_2').notNullable()
      table.string('donation_incentive')
      table.text('info').notNullable()
      table.boolean('backup')
      table.integer('event_id').unsigned().references('id').inTable('Events')
      table.timestamps()
    })
  }

  down () {
    this.drop('applications')
  }
}

module.exports = ApplicationsSchema
