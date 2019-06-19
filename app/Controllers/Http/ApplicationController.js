'use strict'

class ApplicationController {
  async index({view}){
    const appStatus = 'takingApplications';
    if(appStatus != 'takingApplications'){
      return view.render('welcome', {appStatus: appStatus});
    }
    return view.render('apply', {appStatus: appStatus});
  }
  async store({request, response}){
    console.log(request.post())
      return "test";
  }
}

module.exports = ApplicationController
