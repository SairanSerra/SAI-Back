import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ComponentsModel from 'App/Models/ComponentsModel'
import { CreateComponents } from 'App/Schemas/CreateComponents'
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'

export default class ComponentsController {
  public async create({ request, response }: HttpContextContract) {
    await request.validate({ schema: CreateComponents })
    const body = request.all() as ComponentsModel
    const image = request.file('imageDocument')
    const nameImage = `${image!.clientName}${cuid()}.${image?.extname}`
    const saveImageLocal = image?.move(Application.tmpPath('uploads'), {
      name: nameImage,
    })

    body.imageDocument = nameImage

    console.log(nameImage)

    await response.json('teste fines')
  }
}
