import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Components extends BaseSchema {
  protected tableName = 'components'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('partNumber')
      table.string('name')
      table.string('description')
      table.string('model')
      table.string('maker')
      table.string('price')
      table.string('size')
      table.string('typeDraft')
      table.string('LPP')
      table.string('numberPadronization')
      table.string('imageDocument')
      table.timestamp('createdAt').defaultTo(this.now())
      table.timestamp('updatedAt').defaultTo(this.now())
      table.timestamp('deletedAt').nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
