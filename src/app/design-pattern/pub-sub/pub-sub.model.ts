//网上说，订阅者模式是观察者模式的enhance版本，主要目的是为了彻底通过第三方event bus来解耦observable 和 observer。但是我认为挺扯的，根据下方的实现来说，且不说链式调用，就光说这个模式，也就是单纯的把观察者里的数组队列换成了一个map用来对下游数据需要的主题进行分类，没啥太大区别，感觉强行拉上一个event bus挺扯的。估计他是想说，不需要考虑推或拉数据了，因为用户已经通过主题的预先判定来划分好了数据了。就好比这里的messageMap已经划分好了一个个模板，可以理解为不同的subject。反正从技术角度来看，差别不打，如果强行吧这个所谓的event bus分割出来，确实可以把他当做消息队列来大做文章，那就是另一个大话题了。   关灯！拉闸！

export class Subscriber {
  public id: number;
  public name: string;
  public handler!: CallableFunction;
  constructor(id: number, name: string = 'subscriber') {
    this.id = id;
    this.name = name;
  }
  listen(publisher: Publisher, message: string, handle: Function): Subscriber {
    publisher.addListener(this, message);
    this.handler = handle;
    return this;
  }
  unlisten(publisher: Publisher, message: string): Subscriber {
    publisher.removeListener(this, message);
    return this;
  }
}

export class Publisher {
  private messageMap: Map<string, Set<Subscriber>>;
  constructor() {
    this.messageMap = new Map();
  }
  addListener(subscriber: Subscriber, message: string): Publisher {
    if (!this.messageMap.get(message)) {
      this.messageMap.set(message, new Set());
    }
    this.messageMap.get(message)?.add(subscriber);
    return this;
  }

  removeListener(subscriber: Subscriber, message: string): Publisher {
    if (this.messageMap.has(message)) {
      this.messageMap.get(message)?.delete(subscriber);
      if (this.messageMap.get(message)?.keys == null || undefined) {
        this.messageMap.delete(message);
      }
    }
    return this;
  }

  publish(message: string, info: string) {
    this.messageMap.get(message)?.forEach((sub) => {
      sub.handler(info);
    });
  }
}

