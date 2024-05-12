/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4pp5d8qhwucdnfm");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "4pp5d8qhwucdnfm",
    "created": "2023-12-12 13:40:20.803Z",
    "updated": "2023-12-12 13:40:20.803Z",
    "name": "11y3xqjaw73t2zz",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tapeav1e",
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
        "id": "ommkqcjk",
        "name": "addr1",
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
        "id": "9fewgdtu",
        "name": "addr2",
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
        "id": "pm6y5vzl",
        "name": "date",
        "type": "date",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "4k8ev0ka",
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
})
