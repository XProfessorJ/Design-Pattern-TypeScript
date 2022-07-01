interface Order {
  excute(): void;
}

export class Stock {
  private name: string = 'ABC';
  private quantity: number = 10;
  constructor(name: string, quantity: number) {
    this.name = name;
    this.quantity = quantity;
  }
  public buy(): void {
    console.log('buy', this.name, this.quantity);
  }
  public sell(): void {
    console.log('sell', this.name, this.quantity);
  }
}

export class BuyStock implements Order {
  private stock: Stock;
  constructor(stock: Stock) {
    this.stock = stock;
  }
  excute(): void {
    this.stock.buy();
  }
}

export class SellStock implements Order {
  private stock: Stock;
  constructor(stock: Stock) {
    this.stock = stock;
  }
  excute(): void {
    this.stock.sell();
  }
}

export class Stocker {
  private orderList = new Array<Order>();
  public addOrder(order: Order) {
    this.orderList.push(order);
    return this;
  }
  public removeOrder(order: Order) {
    this.orderList = this.orderList.filter((ord) => ord != order);
    return this;
  }
  public doTransaction() {
    this.orderList.map((order) => order.excute());
  }
}
