'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class EventTime extends Model {
  event(){
    return this.belongsTo('App/Model/Event')
  }
}

module.exports = EventTime
