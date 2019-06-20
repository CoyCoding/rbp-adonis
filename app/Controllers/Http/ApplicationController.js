'use strict'
const Database = use('Database');
const User = use('App/Models/User');

class ApplicationController {
  async index({view}){
    const appStatus = 'takingApplications';
    if(appStatus != 'takingApplications'){
      return view.render('welcome', {appStatus: appStatus});
    }else{
          return view.render('welcome', {appStatus: appStatus});
    }

  }

  //web Api for form submition with auto csrf
  async store({request, response}){
    const times = request.post().times;
    const dates = request.post().dates;
    const textFields = request.post().textFields;
    const user = new User();
    user.username = 'test1';
    user.password = 'pass1';
    await user.save();

    Object.keys(times)
      .filter(time => times[time] === true)
      .forEach(time => {
        console.log(time, "is selected.");
      })

  }
}

module.exports = ApplicationController
