interface State {
  doAction(context: Context): void;
  toString(): string;
}

export class StartState implements State {
  doAction(context: Context): void {
    context.setState(this);
  }
  public toString(): string {
    return 'Start State';
  }
}

export class StopState implements State {
  doAction(context: Context): void {
    context.setState(this);
  }
  public toString(): string {
    return 'Stop State';
  }
}

export class Context {
  state: State;
  constructor(state: State) {
    this.state = state;
  }
  getState(): State {
    return this.state;
  }
  setState(state: State): void {
    this.state = state;
  }
  toString() {
    return this.state.toString();
  }
}
