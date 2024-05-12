/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8jauzi72cyyvgys");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "8jauzi72cyyvgys",
    "created": "2023-12-12 02:11:31.106Z",
    "updated": "2023-12-12 02:11:31.106Z",
    "name": "qp2ohxgr0hob4fu",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kca9bhnn",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nssltr9y",
        "name": "cost",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
