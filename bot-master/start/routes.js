'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

// Route.on('/').render('dashboard')

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
Route.get('dashboard/','DashboardController.show')
Route.post('dashboard/','DashboardController.recoverLogin')


/* c2 Routes */ 

Route.get('c2/register','c2/RegisterController.show')
Route.post('register-bot/','c2/RegisterController.register')


