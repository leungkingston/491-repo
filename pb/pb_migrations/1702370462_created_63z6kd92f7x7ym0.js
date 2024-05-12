/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6mxlbjssyzt9fpd",
    "created": "2023-12-12 08:41:02.761Z",
    "updated": "2023-12-12 08:41:02.761Z",
    "name": "63z6kd92f7x7ym0",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sjvmgxgl",
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
        "id": "tc0tmfye",
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
        "id": "w2ascsqp",
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
  const collection = dao.findCollectionByNameOrId("6mxlbjssyzt9fpd");

  return dao.deleteCollection(collection);
})
