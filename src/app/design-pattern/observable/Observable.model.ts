//大部分言论认为订阅者模式是观察者模式的加强版，强制解耦了observable和observer。我认为挺扯的，可以看下一章的实现方式
//设计模式一书中认为，观察者模式可以划分为，pull和push两种模式，push意思就是notify下游时，是否把数据直接传送过去，
//pull则是单纯的notify一下，让下游自己来拉数据。前者需要为下游做数据处理，要协商数据格式，后者需要暴露接口给下游，
//且下游需要自己处理数据，判断哪些数值改变了。都有利弊，得根据具体需求来进行敲定
export class Observable {
  private state: Map<string, number>;
  private customerList: Customer[];
  private customerPreferList: Map<string, Set<Customer>> = new Map();
  constructor(state: Map<string, number>) {
    this.state = state;
    this.customerList = [];
  }
  getState(category: string): any {
    return this.state.get(category);
  }

  change(category: string, state: number) {
    this.state.set(category, state);
    this.notify(this, category, state);
  }

  notify(obs: Observable, category: string, state: number) {
    this.customerList.forEach((customer) => customer.notify({ abc: 1 }));
  }

  add(customer: Customer) {
    this.customerList.push(customer);
  }
  remove(customer: Customer) {
    this.customerList.filter((cus) => cus.getId() != customer.getId());
  }
}

export class Customer {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
  notify(obj: any) {
    console.log(`Customer ${this.id} ${JSON.stringify(obj)}`);
  }
  subscribe(obs: Observable) {
    obs.add(this);
  }
  unsubscribe(obs: Observable) {
    obs.remove(this);
  }
  getId() {
    return this.id;
  }
}
