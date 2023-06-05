import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateClientService from 'App/Services/Client/Create'
import { PropsCreateClient } from 'App/Services/Client/Create/types'
import DestroyClientService from 'App/Services/Client/Destroy'
import GetAllClientService from 'App/Services/Client/GetClient'
import { createClient } from 'App/Validator/Client/Create'
import { destroyClient } from 'App/Validator/Client/Destroy'

export default class ClientsController {
  private createClientService: typeof CreateClientService
  private destroyClientService: typeof DestroyClientService
  private getAllClientService: typeof GetAllClientService
  constructor() {
    this.createClientService = CreateClientService
    this.destroyClientService = DestroyClientService
    this.getAllClientService = GetAllClientService
  }
  public async create({ request, response }: HttpContextContract) {
    await request.validate({ schema: createClient })
    const body = request.all() as PropsCreateClient
    const clientCreated = this.createClientService.create(body)
    return response.status((await clientCreated).statusCode).json(clientCreated)
  }

  public async destroy({ request, response }: HttpContextContract) {
    await request.validate({ schema: destroyClient })
    const body = request.all()
    const clientDeleted = this.destroyClientService.destroy(body.id)
    return response.status((await clientDeleted).statusCode).json(clientDeleted)
  }

  public async getAll({ response }: HttpContextContract) {
    const listClient = this.getAllClientService.getAll()

    return response.status((await listClient).statusCode).json(await listClient)
  }
}
