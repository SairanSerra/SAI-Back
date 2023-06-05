import { schema } from '@ioc:Adonis/Core/Validator'

export const destroyClient = schema.create({
  id: schema.number(),
})
