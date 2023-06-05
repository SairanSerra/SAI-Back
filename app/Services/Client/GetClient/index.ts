import Client from 'App/Models/Client'

class GetAllClientService {
  private model: typeof Client

  constructor() {
    this.model = Client
  }
  public async getAll() {
    const getClientSpecific = await this.model.query()

    return {
      statusCode: 200,
      message: 'Lista de Clientes',
      content: getClientSpecific,
    }
  }
}

export default new GetAllClientService()
