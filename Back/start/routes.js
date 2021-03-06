'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.post('user/create', 'UserController.store');
    Route.post('user/login', 'UserController.login');
    // Route.post('talent/list', 'TalentController.index').middleware('auth');
    Route.post('talent/list', 'TalentController.index');
    Route.post('talent/create', 'TalentController.store');
    Route.delete('talent/delete/:id', 'TalentController.destroy');
    Route.get('talent/find/:id', 'TalentController.findById');
    Route.patch('talent/update/:id', 'TalentController.update');
}).prefix('api/v1/');