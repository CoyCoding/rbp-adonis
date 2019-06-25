'use strict'

class ApplicationController {
  async index({view}){
    return view.render('apply')
  }
  async store({request, response}){
    console.log(request.post())
      return "test";
  }
}

module.exports = ApplicationController
