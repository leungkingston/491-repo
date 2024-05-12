/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "g8yaf0l5kaq7z50",
    "created": "2023-12-12 01:29:10.715Z",
    "updated": "2023-12-12 01:29:10.715Z",
    "name": "mypy9s9844yskl9",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "is4nwtq3",
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
        "id": "1wlqmijw",
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
  const collection = dao.findCollectionByNameOrId("g8yaf0l5kaq7z50");

  return dao.deleteCollection(collection);
})
