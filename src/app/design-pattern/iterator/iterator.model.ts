interface IndIterator {
  hasNext(): boolean;
  next(): any;
}
interface IteratorClass {
  getIterator(): IndIterator;
}

export class Sport implements IteratorClass {
  public sportList = ['football', 'basketball', 'badminton,', 'volley'];
  getIterator(): IndIterator {
    return new this.Iterator(this.sportList);
  }
  private Iterator = class {
    list: any;
    constructor(list: any) {
      this.list = list;
    }
    private index: number = 0;
    hasNext(): boolean {
      return this.index < this.list.length;
    }
    next(): any {
      return this.hasNext() ? this.list[++this.index] : null;
    }
  };
}
