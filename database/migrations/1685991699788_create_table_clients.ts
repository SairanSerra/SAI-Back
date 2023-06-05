import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateTableClients extends BaseSchema {
  protected tableName = 'client'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('type').defaultTo('INTERNO')
      table.timestamp('createdAt').defaultTo(this.now())
      table.timestamp('updatedAt').defaultTo(this.now())
      table.timestamp('deletedAt').nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
