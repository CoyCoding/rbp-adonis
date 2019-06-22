'use strict'

class AdminController {
  async index({response, request}){
    console.log(request.body)
    return 'yes'
  }
}

module.exports = AdminController
