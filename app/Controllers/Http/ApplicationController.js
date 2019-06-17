'use strict'

class ApplicationController {
  async index({view}){
    return view.render('apply')
  }
}

module.exports = ApplicationController
