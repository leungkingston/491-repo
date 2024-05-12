/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uij5yxxpa4e2nyi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e59nwxnb",
    "name": "eta",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uij5yxxpa4e2nyi")

  // remove
  collection.schema.removeField("e59nwxnb")

  return dao.saveCollection(collection)
})
