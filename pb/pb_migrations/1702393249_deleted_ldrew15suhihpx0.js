/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hid2e3zm44rsxqv");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "hid2e3zm44rsxqv",
    "created": "2023-12-12 09:58:49.227Z",
    "updated": "2023-12-12 09:58:49.227Z",
    "name": "ldrew15suhihpx0",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "glaelqvn",
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
        "id": "hvqmtplh",
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
        "id": "5wzkstbl",
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
