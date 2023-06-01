import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Components extends BaseModel {
  protected tableName = 'components'

  @column({ isPrimary: true })
  public id: number

  @column({
    columnName: 'partNumber',
  })
  public partNumber: number

  @column({
    columnName: 'name',
  })
  public name: string

  @column({
    columnName: 'description',
  })
  public description: string

  @column({
    columnName: 'model',
  })
  public model: string

  @column({
    columnName: 'maker',
  })
  public maker: string

  @column({
    columnName: 'price',
  })
  public price: number

  @column({
    columnName: 'size',
  })
  public size: number

  @column({
    columnName: 'typeDraft',
  })
  public typeDraft: string

  @column({
    columnName: 'LPP',
  })
  public LPP: number

  @column({
    columnName: 'numberPadronization',
  })
  public numberPadronization: number

  @column({
    columnName: 'imageDocument',
  })
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
