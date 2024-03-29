'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome');
Route.group(()=>{
  Route.post('','ApplicationController.store');
}).prefix('apply')
// Route.group(()=>{
//
// }).prefix('admin')
Route.post('/admin/login', 'AdminController.login');
Route.post('/admin/logout', 'AdminController.logout');
//Route.get('/admin/home', 'AdminController.home');
// // Route.get('/apply', 'ApplicationController.index');
// Route.get('/schedule', 'ScheduleController.index');
// Route.get('/admin', 'AdminController.index');

Route.any('*', ({ view }) => view.render('welcome'))
