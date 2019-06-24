'use strict'

class AdminController {
<<<<<<< HEAD
  async index({view}){
    return view.render('admin')
=======
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

>>>>>>> parent of 7cc91d9... controller jwt added
  }
}

module.exports = AdminController
