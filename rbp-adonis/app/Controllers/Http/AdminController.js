'use strict'

class AdminController {
<<<<<<< HEAD
  async index({view}){
    return view.render('admin')
=======
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

>>>>>>> parent of 7cc91d9... controller jwt added
  }
}

module.exports = AdminController
