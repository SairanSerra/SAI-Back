import { PropsCreateClient } from './types'
import Client from 'App/Models/Client'

class CreateClientService {
  private model: typeof Client

  constructor() {
    this.model = Client
  }
  public async create(data: PropsCreateClient) {
    await this.model.create(data)

    return {
      statusCode: 201,
      message: 'Componente criado com sucesso',
    }
  }
}

export default new CreateClientService()
