import { PropsCreateClient } from './types'
import ClientModel from 'App/Models/ClientModel'

class CreateClientService {
  private model: typeof ClientModel

  constructor() {
    this.model = ClientModel
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
