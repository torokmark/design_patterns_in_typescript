
interface Strategy {
    execute(): void;
}

class ConcreteStrategy1 implements Strategy {
    public execute(): void {
        console.log("`execute` method of ConcreteStrategy1 is being called");
    }
}

class ConcreteStrategy2 implements Strategy {
    public execute(): void {
        console.log("`execute` method of ConcreteStrategy2 is being called");
    }
}

class ConcreteStrategy3 implements Strategy {
    public execute(): void {
        console.log("`execute` method of ConcreteStrategy3 is being called");
    }
}

class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public executeStrategy(): void {
        this.strategy.execute();
    }
}

(function main() {
    var context: Context = new Context(new ConcreteStrategy1());

    context.executeStrategy();

    context = new Context(new ConcreteStrategy2());
    context.executeStrategy();

    context = new Context(new ConcreteStrategy3());
    context.executeStrategy();

}());
