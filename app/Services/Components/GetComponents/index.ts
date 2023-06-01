import Components from 'App/Models/Components'
import { PropsGetDocument } from './types'

class GetComponentsService {
  private model: typeof Components
  constructor() {
    this.model = Components
  }
  public async getComponents({ currentPage = 1, nameComponent }: PropsGetDocument) {
    const getListComponents = this.model
      .query()
      .where((query) => {
        if (nameComponent) {
          query.where('name', nameComponent)
        }
      })
      .paginate(currentPage, 10)

    const listIsEmpty = (await getListComponents).isEmpty

    console.log(listIsEmpty)
    return {
      statusCode: listIsEmpty ? 404 : 200,
      message: listIsEmpty ? 'Lista de componentes vazia' : 'Lista de Components',
      content: { meta: (await getListComponents).getMeta(), data: (await getListComponents).all() },
    }
  }
}

export default new GetComponentsService()
