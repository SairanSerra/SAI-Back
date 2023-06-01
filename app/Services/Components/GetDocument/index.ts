import Components from 'App/Models/Components'
import Drive from '@ioc:Adonis/Core/Drive'

class GetDocumentService {
  private model = Components
  public async getImageDocument(idComponent: number) {
    const documentComponent = await this.model
      .query()
      .select('imageDocument')
      .where('id', idComponent)
      .first()

    return {
      statusCode: documentComponent ? 200 : 404,
      message: documentComponent ? 'Documento encontrado com sucesso' : 'Documento não encontrado',
      content: documentComponent ? await Drive.get(documentComponent?.imageDocument!) : null,
    }
  }
}

export default new GetDocumentService()
