'use strict'

const Database = use('Database');
const User = use('App/Models/User');
const Token = use('App/Models/Token');

class AdminController {
  async index({response, request, auth, session}){
    const {username, password} = request.all();
    try{
         console.log('logged in');
         await auth.attempt(username, password);
         let user = await User.findBy('username', username)
         console.log(user)
         let accessToken = await auth.generate(user)
         return response.json({"user":user, "access_token": accessToken})
         // console.log(user)
         // const accessToken = await auth.generate(user);
         // return response.json({user: user,access_token: accessToken})
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
}

module.exports = AdminController
