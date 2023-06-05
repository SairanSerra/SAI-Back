/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('/', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route.group(() => {
  Route.get('/get-all', 'ComponentsController.getComponents')
  Route.post('/create', 'ComponentsController.create')
  Route.delete('/destroy', 'ComponentsController.destroy')
  Route.get('/get-document', 'ComponentsController.getDocument')
}).prefix('components')

Route.group(() => {
  Route.get('/get-all', 'ClientsController.getAll')
  Route.post('/create', 'ClientsController.create')
  Route.delete('/destroy', 'ClientsController.destroy')
}).prefix('client')
