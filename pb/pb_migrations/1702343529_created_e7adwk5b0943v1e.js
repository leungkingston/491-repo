/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "izbq92kfmk60ztw",
    "created": "2023-12-12 01:12:09.070Z",
    "updated": "2023-12-12 01:12:09.070Z",
    "name": "e7adwk5b0943v1e",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dbiiyfzy",
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
        "id": "emdhnymi",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("izbq92kfmk60ztw");

  return dao.deleteCollection(collection);
})
