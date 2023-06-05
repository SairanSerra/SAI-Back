import ClientModel from 'App/Models/ClientModel'

class GetAllClientService {
  private model: typeof ClientModel

  constructor() {
    this.model = ClientModel
  }
  public async getAll() {
    const getClientSpecific = await this.model.query().paginate(1, 20)

    return {
      statusCode: 200,
      message: 'Cliente Excluído com sucesso',
      content: getClientSpecific,
    }
  }
}

export default new GetAllClientService()
