'use strict';

class foodModel {
  constructor() {
    this.id = 0;
    this.db = [];
  }

  get(id) {
    if (id) {
      return this.db.find(record => record.id === id);
    } else {
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
      //console.log('hello', this.db[0].id);
      const i = this.db.findIndex(record => record.id === parseInt(id));

      // console.log('__I__', i);
      this.db[i].name = obj.name;
      return this.db[i];
    }
  }

  delete(id) {
    if (!id) { return null; }
    else {
      const i = this.db.find(record => record.id === parseInt(id));
      this.db.splice(i, 1);
      return this.db;
    }
  }
}

//return

module.exports = foodModel;