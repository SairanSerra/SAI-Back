import Drive from '@ioc:Adonis/Core/Drive'
import Components from 'App/Models/Components'
import { PropsCreateComponents } from './types'
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'

class CreateComponentsService {
  private model: typeof Components

  constructor() {
    this.model = Components
  }
  public async create(data: PropsCreateComponents) {
    const nameImage = `${data.imageDocument!.clientName}${cuid()}.${data.imageDocument?.extname}`
    await data.imageDocument?.move(Application.tmpPath('uploads'), {
      name: nameImage,
    })
    data.imageDocument = await Drive.getUrl(nameImage)
    await this.model.create(data)

    return {
      statusCode: 201,
      message: 'Componente criado com sucesso',
    }
  }
}

export default new CreateComponentsService()
