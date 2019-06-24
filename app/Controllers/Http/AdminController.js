'use strict'

class AdminController {
  async index({view}){
    return view.render('admin')
  }
}

module.exports = AdminController
