'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Application extends Model {
  availableDates(){
    return this.hasMany('App/Model/EventDate')
  }
  availableTimes(){
    return this.hasMany('App/Model/EventTime')
  }
  events(){
      return this.belongsTo('App/Model/Event')
  }
}

module.exports = Application
