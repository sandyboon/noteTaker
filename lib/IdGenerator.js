let instance = null;
class IdGenerator {
  static id = 0;
  static initialIdSet = false;
  constructor() {
    console.log(`IdGenerator const called`);
    if (!instance) {
      instance = this;
    }
    return instance;
  }
  getNextId() {
    console.log(`current id: ${IdGenerator.id}`);
    return ++IdGenerator.id;
  }

  setInitialId(initialId) {
    if (!IdGenerator.initialIdSet) {
      IdGenerator.id = initialId;
      this.initialIdSet = true;
    }
  }
}

module.exports = IdGenerator;
