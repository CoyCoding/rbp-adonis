'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('@adonisjs/lucid/src/Schema')

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
    console.log(request.post())
    const applicationTable = new Schema(
      {up () {
  this.create('test', (table) => {
    table.increments()
    table.string('username', 80).notNullable().unique()
    table.string('email', 254).notNullable().unique()
    table.string('password', 60).notNullable()
    table.timestamps()
  }
    )
  }
})
}

}
module.exports = ApplicationController
