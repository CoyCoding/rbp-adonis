'use strict'

const Database = use('Database');
const User = use('App/Models/User');
const Token = use('App/Models/Token');

class AdminController {
  async login({response, request, auth, session}){
    const {username, password} = request.all();
    try {
      if (await auth.attempt(username, password)) {
        const user = await User.findBy('username', username)
        const accessToken = await auth.withRefreshToken().generate(user)
        console.log(accessToken)
        return accessToken
      }
    }catch (e){
      console.log(e)
      return e
    }
  }
  async logout({respnose, request, auth, session}){
    console.log('logged off');
    try{
        await auth.logout();
    }catch(e){
      console.log(e)
    }

  }

  async home({respnose, request, auth, session}){

  }
}

module.exports = AdminController
