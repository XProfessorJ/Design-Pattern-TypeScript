export abstract class Baverage {
  description: string = 'No Description';
  constructor(descriptrion: string) {
    this.description = descriptrion;
  }
  public getDescription() {
    return this.description;
  }
  public abstract cost(): number;
}

export abstract class CondimentDecorator extends Baverage {
  public abstract getDescription(): string;
}

export class Decafe extends Baverage {
  constructor(bavera:Baverage) {
    super(bavera.getDescription());
  }
  public cost(): number {
    return 1.0;
  }
}

export class Espreso extends Baverage {
  public cost(): number {
    return 0.8;
  }
}

export class Mocha extends CondimentDecorator {
  baverage: Baverage;
  constructor(baverage: Baverage) {
    super(baverage.getDescription());
    this.baverage = baverage;
  }
  public getDescription() {
    return `${this.description}, Mocha`;
  }
  public cost(): number {
    return this.baverage.cost() + 1.2;
  }
}

export class Latte extends CondimentDecorator {
  baverage: Baverage;
  constructor(baverage: Baverage) {
    super(baverage.getDescription());
    this.baverage = baverage;
  }
  public getDescription(): string {
    return `${this.description}, Latte`;
  }
  public cost(): number {
    return this.baverage.cost() + 1.4;
  }
}
