/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "x1kuzemzc233o1c",
    "created": "2023-12-12 10:34:45.481Z",
    "updated": "2023-12-12 10:34:45.481Z",
    "name": "wb013mvxii38clx",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xm3wtuoi",
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
        "id": "klvsq81b",
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
      },
      {
        "system": false,
        "id": "pfiuth79",
        "name": "getready",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("x1kuzemzc233o1c");

  return dao.deleteCollection(collection);
})
