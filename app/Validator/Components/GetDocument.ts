import { schema } from '@ioc:Adonis/Core/Validator'

export const getDocumentValidate = schema.create({
  id: schema.number(),
})
