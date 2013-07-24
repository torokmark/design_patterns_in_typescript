interface State {
    handle(context: Context): void;
}

class ConcreteStateA implements State {
    public handle(context: Context): void {
        console.log("`handle` method of ConcreteStateA is being called!");
        context.State = new ConcreteStateB();
    }
}

class ConcreteStateB implements State {
    public handle(context: Context): void {
        console.log("`handle` method of ConcreteStateB is being called!");
        context.State = new ConcreteStateA();
    }
}

class Context {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    get State(): State {
        return this.state;
    }

    set State(state: State) {
        this.state = state;
    }

    public request(): void {
        console.log("request is being called!");
        this.state.handle(this);
    }
}


(function main() {
    var context: Context = new Context(new ConcreteStateA());
    context.request();
    context.request();
    context.request();
    context.request();
    context.request();
    context.request();
    context.request();
    context.request();
    
}());