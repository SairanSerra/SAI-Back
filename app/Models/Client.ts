import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({
    columnName: 'name',
  })
  public name: string
  @column({
    columnName: 'type',
  })
  public type: 'INTERNO' | 'EXTERNO'

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
