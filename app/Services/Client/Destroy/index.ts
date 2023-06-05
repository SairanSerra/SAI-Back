import ClientModel from 'App/Models/ClientModel'

class DestroyClientService {
  private model: typeof ClientModel

  constructor() {
    this.model = ClientModel
  }
  public async destroy(idClient: number) {
    const getClientSpecific = await this.model.query().where('id', idClient).first()
    await getClientSpecific?.delete()
    return {
      statusCode: 200,
      message: 'Cliente Excluído com sucesso',
    }
  }
}

export default new DestroyClientService()
