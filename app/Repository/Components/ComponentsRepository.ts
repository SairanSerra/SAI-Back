import ComponentsModel from 'App/Models/Components'
import { PropsCreate } from './types'

export class ComponentsRepository {
  private componentModel: typeof ComponentsModel

  constructor() {
    this.componentModel = ComponentsModel
  }
  public async create(data: PropsCreate) {
    this.componentModel.create(data)
  }
}
