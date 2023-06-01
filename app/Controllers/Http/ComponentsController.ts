import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateComponents } from 'App/Validator/Components/Create'
import { PropsCreateComponents } from 'App/Services/Components/Create/types'
import CreateComponentsService from 'App/Services/Components/Create'
import { DetroyComponents } from 'App/Validator/Components/Destroy'
import DestroyComponentsService from 'App/Services/Components/Destroy'
import GetDocumentService from 'App/Services/Components/GetDocument'
import { getDocumentValidate } from 'App/Validator/Components/GetDocument'
import GetComponentsService from 'App/Services/Components/GetComponents'

export default class ComponentsController {
  private createService: typeof CreateComponentsService
  private deleteService: typeof DestroyComponentsService
  private getDocumentService: typeof GetDocumentService
  private getComponentsService: typeof GetComponentsService
  constructor() {
    this.createService = CreateComponentsService
    this.deleteService = DestroyComponentsService
    this.getDocumentService = GetDocumentService
    this.getComponentsService = GetComponentsService
  }
  public async create({ request, response }: HttpContextContract) {
    await request.validate({ schema: CreateComponents })
    const body = request.all() as PropsCreateComponents
    body.imageDocument = request.file('imageDocument')

    const createComponent = await this.createService.create(body)
    return response.status(createComponent.statusCode).json(createComponent)
  }

  public async destroy({ request, response }: HttpContextContract) {
    await request.validate({ schema: DetroyComponents })
    const body = request.all()

    const deleteComponent = this.deleteService.destroy(body.id)
    return response.status((await deleteComponent).statusCode).json(await deleteComponent)
  }

  public async getDocument({ request, response }: HttpContextContract) {
    await request.validate({ schema: getDocumentValidate })
    const body = request.all()
    const imageDocument = this.getDocumentService.getImageDocument(body.id)
    return response.status((await imageDocument).statusCode).json(await imageDocument)
  }

  public async getComponents({ request, response }: HttpContextContract) {
    const body = request.all()
    console.log(body)
    const listComponents = await this.getComponentsService.getComponents()

    return response.status(200).json(listComponents)
  }
}
