interface Component {
    operation(): void;
}

class Composite implements Component {

    private list: Component[];
    private s: String;

    constructor(s: String) {
        this.list = [];
        this.s = s;
    }

    public operation(): void {
        console.log("`operation of `", this.s)
        for (var i = 0; i < this.list.length; i += 1) {
            this.list[i].operation();
        }
    }

    public add(c: Component): void {
        this.list.push(c);
    }

    public remove(i: number): void {
        if (this.list.length < i) {
            throw new Error("index out of bound!");
        }
        this.list.splice(i, 1);
    }
}

class Leaf implements Component {
    private s: String;
    constructor(s: String) {
        this.s = s;
    }
    public operation(): void {
        console.log("`operation` of Leaf", this.s, " is called.");
    }
}

(function main() {
    var leaf1 = new Leaf("1"), 
        leaf2 = new Leaf("2"),
        leaf3 = new Leaf("3"),

        composite1 = new Composite("Comp1"),
        composite2 = new Composite("Comp2");

    composite1.add(leaf1);
    composite1.add(leaf2);
    composite1.add(leaf3);

    composite2.add(leaf1);
    composite2.add(leaf3);

    composite1.operation();
    composite2.operation();
}());
