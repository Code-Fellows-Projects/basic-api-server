'use strict';

class clothesModel {
  constructor() {
    this.id = 0;
    this.db = [];
  }

  get(id) {
    if (id) {
      // this is for get oneTypeOfClothes
      return this.db.find(record => record.id === id);
    } else {
      /// for all clothes
      return this.db;
    }
  }

  create(obj) {
    obj.id = ++this.id;
    this.db.push(obj);
    return obj;

  }

  update(id, obj) {
    if (!id) { return null; }
    else {
      const i = this.db.findIndex(record => record.id === parseInt(id));
      this.db[i].name = obj.name;
      return this.db[i];
    }
  }

  delete(id) {
    if (!id) { return null; }
    else {
      this.db.find(record => record.id === id);
    }
    //todo how to delete the object
    return null;
  }
}

module.exports = clothesModel;