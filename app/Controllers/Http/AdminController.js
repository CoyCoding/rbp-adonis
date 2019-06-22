'use strict'

const Database = use('Database');
const User = use('App/Models/User');

class AdminController {
  async index({response, request, auth}){
    const {username, password} = request.all();
    // console.log(response)
    try{
         console.log('logged in')
         await auth.attempt(username, password)
         return auth._ctx.session._sessionId;
    }catch (e){
      console.log(e)
    }


    return 'yes'
  }
  async logout({respnose, request, auth, session}){
    console.log(request.post().data)
    console.log('logged off');
    auth.logout();
  }
}

module.exports = AdminController
