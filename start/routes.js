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

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/posts', 'PostController.index')
Route.post('/posts/add', 'PostController.store')
Route.get('/posts/:id', 'PostController.show')
Route.post('/posts/:id', 'PostController.update')
Route.get('/plans', 'PlanController.index')
Route.post('/plans', 'PlanController.store')
