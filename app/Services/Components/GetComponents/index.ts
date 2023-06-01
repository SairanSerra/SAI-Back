import Components from 'App/Models/Components'

class GetComponentsService {
  private model: typeof Components
  constructor() {
    this.model = Components
  }
  public async getComponents() {
    return this.model.query()
  }
}

export default new GetComponentsService()
