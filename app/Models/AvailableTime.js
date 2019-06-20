'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AvailableTime extends Model {
  application(){
    return this.belongsTo('App/Model/Application')
  }
}

module.exports = AvailableTime
