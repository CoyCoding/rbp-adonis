'use strict'

const Database = use('Database');
const User = use('App/Models/User');
const Token = use('App/Models/Token');

class AdminController {
  async login({response, request, auth}){
    console.log(response)
  }
  async logout({respnose, request, auth, session}){
    console.log(response)
  }
  async index({response, request}){
    return <h1>auth</h1>
  }
}

module.exports = AdminController
