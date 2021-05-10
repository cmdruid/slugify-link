/** src/model/slug.js */

const schema = {
  /** Configure the collection's schema.
   * https://docs.mongodb.com/manual/core/schema-validation/
   */
  bsonType: "object",
  required: [ "slug", "url" ],
  properties: {
    slug: {
      bsonType: "string",
      maxLength: 120,
      description: "Must be a string and is required."
    },
    url: {
      bsonType: "string",
      maxLength: 1024,
      description: "Must be a string and is required."
    }
  }
}

export const SlugModel = {
  // Name of the collection.
  name: 'slugs', 

  indexes: [
    /** Configure the collection's indexes.
     * https://docs.mongodb.com/manual/reference/command/createIndexes
     */
    {
      name: "_slug_",
      key: { slug: 1 },
      unique: true
    }
  ],
  options: {
    validator: { $jsonSchema: schema },
    validationLevel: "strict",
    validationAction: "error"
  }
}
