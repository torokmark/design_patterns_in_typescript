interface Component {
    operation(): void;
}

class ConcreteComponent implements Component {
    private s: String;

    constructor(s: String) {
        this.s = s;
    }

    public operation(): void {
        console.log("`operation` of ConcreteComponent", this.s, " is being called!");
    }
}

class Decorator implements Component {
    private component: Component;
    private id: Number;

    constructor(id: Number, component: Component) {
        this.id = id;
        this.component = component;
    }

    public get Id(): Number {
        return this.id;
    }

    public operation(): void {
        console.log("`operation` of Decorator", this.id, " is being called!");
        this.component.operation();
    }
}

class ConcreteDecorator extends Decorator {
    constructor(id: Number, component: Component) {
        super(id, component);
    }

    public operation(): void {
        super.operation();
        console.log("`operation` of ConcreteDecorator", this.Id, " is being called!");
    }
}

(function main() {
    var decorator1: Decorator = new ConcreteDecorator(1, new ConcreteComponent("Comp1"));

    decorator1.operation();
}());