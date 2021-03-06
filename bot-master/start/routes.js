'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')


/* Auth Routes */
Route.get('login','Auth/LoginController.show')
Route.post('login', 'Auth/LoginController.login')

Route.get('logout','Auth/LoginController.logout')

Route.get('register','Auth/RegisterController.register')

Route.get('forgot','Auth/LoginController.showForgot')
Route.post('forgot', 'Auth/LoginController.forgot')

Route.get('recover/:key','Auth/LoginController.recover')
Route.post('recover/:key','Auth/LoginController.recoverLogin')


/* Dashboard Routes */ 

// Route.get('/','DashboardController.show')
Route.get('/','DashboardController.show')
Route.get('dashboard/','DashboardController.show')


/* c2 Routes */ 

Route.get('c2/dashboard','c2/DashboardController.show')

Route.get('c2/server/:id','c2/DashboardController.show')

Route.put('c2/register-c2/','c2/RegisterController.registerC2')


