import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ComponentsModel extends BaseModel {
  protected tableName = 'components'

  @column({ isPrimary: true })
  public id: number

  @column()
  public partNumber: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public model: string

  @column()
  public maker: string

  @column()
  public price: number

  @column()
  public size: number

  @column()
  public typeDraft: string

  @column()
  public LPP: number

  @column()
  public numberPadronization: number

  @column()
  public imageDocument: string

  @column.dateTime({
    autoCreate: true,
    columnName: 'createdAt',
    serializeAs: 'createdAt',
    serialize: (value) => value.toFormat('dd/MM/yyyy HH:mm:ss'),
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serializeAs: null,
    columnName: 'updatedAt',
  })
  public updatedAt: DateTime
  @column.dateTime({ columnName: 'deletedAt', serializeAs: null })
  public deletedAt: DateTime
}
