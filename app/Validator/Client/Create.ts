import { schema } from '@ioc:Adonis/Core/Validator'

export const createClient = schema.create({
  name: schema.string(),
  type: schema.string(),
})
