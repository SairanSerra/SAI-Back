import Client from 'App/Models/Client'

class DestroyClientService {
  private model: typeof Client

  constructor() {
    this.model = Client
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
