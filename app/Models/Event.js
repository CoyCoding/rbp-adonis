'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {
  eventDates(){
    return this.hasMany('App/Model/EventDate')
  }
  eventTimes(){
    return this.hasMany('App/Model/EventTime')
  }
  applications(){
      return this.hasMany('App/Model/Event')
  }
  static get createdAtColumn () {
  return 'created_at'
}
static get updatedAtColumn () {
  return 'updated_at'
}
}

module.exports = Event
