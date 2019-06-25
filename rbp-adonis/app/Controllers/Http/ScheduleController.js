'use strict'

class ScheduleController {
  async index({view}){
    return view.render('schedule')
  }
}

module.exports = ScheduleController
