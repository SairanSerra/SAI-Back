import Components from 'App/Models/Components'

class DestroyComponentsService {
  private model: typeof Components

  constructor() {
    this.model = Components
  }
  public async destroy(id: number) {
    const component = await this.model.query().where('id', id).first()
    await component?.delete()

    return {
      statusCode: 200,
      message: 'Componente Excluido com sucesso',
    }
  }
}

export default new DestroyComponentsService()
