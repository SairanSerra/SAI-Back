import { schema } from '@ioc:Adonis/Core/Validator'

/**
 * Validate request body against the schema
 */

export const CreateComponents = schema.create({
  partNumber: schema.number(),
  name: schema.string(),
  description: schema.string(),
  model: schema.string(),
  maker: schema.string(),
  price: schema.number(),
  size: schema.number(),
  typeDraft: schema.string(),
  LPP: schema.number(),
  numberPadronization: schema.number(),
  imageDocument: schema.file({ size: '2mb', extnames: ['pdf'] }),
})
