'use strict'

const Database = use('Database');
const User = use('App/Models/User');
const Token = use('App/Models/Token');

class AdminController {
  async index({response, request, auth, session}){
    const {username, password} = request.all();
    // console.log(response)
    try{
         console.log('logged in')
         await auth.attempt(username, password)
         // response.cookie.('session', auth._ctx.session._sessionId);

    }catch (e){
      console.log(e)
      return e
    }
  }
  async logout({respnose, request, auth, session}){
    console.log('logged off');
    try{
      //console.log(respnose.cookie('session'))
        console.log(request.cookie('session'))
        await auth.logout();
    }catch(e){
      console.log(e)
    }

  }
}

module.exports = AdminController
