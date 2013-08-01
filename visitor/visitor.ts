interface Visitor {
    visitConcreteElement1(concreteElement1: ConcreteElement1): void;
    visitConcreteElement2(concreteElement2: ConcreteElement2): void
}

class ConcreteVisitor1 implements Visitor {
    public visitConcreteElement1(concreteElement1: ConcreteElement1): void {
        console.log("`visitConcreteElement1` of ConcreteVisitor1 is being called!");
    }

    public visitConcreteElement2(concreteElement2: ConcreteElement2): void {
        console.log("`visitConcreteElement2` of ConcreteVisitor1 is being called!");
    }
}

class ConcreteVisitor2 implements Visitor {
    public visitConcreteElement1(concreteElement1: ConcreteElement1): void {
        console.log("`visitConcreteElement1` of ConcreteVisitor2 is being called!");
    }

    public visitConcreteElement2(concreteElement2: ConcreteElement2): void {
        console.log("`visitConcreteElement2` of ConcreteVisitor2 is being called!");
    }
}


interface Element {
    accept(visitor: Visitor): void;
}

class ConcreteElement1 implements Element {
    public accept(visitor: Visitor): void {
        console.log("`accept` of ConcreteElement1 is being called!");
        visitor.visitConcreteElement1(this);
    }
}

class ConcreteElement2 implements Element {
    public accept(visitor: Visitor): void {
        console.log("`accept` of ConcreteElement2 is being called!");
        visitor.visitConcreteElement2(this);
    }
}

class Objs {
    private elements: Element[] = [];

    public attach(e: Element): void {
        this.elements.push(e);
    }

    public detach(e: Element): void {
        var index = this.elements.indexOf(e);
        this.elements.splice(index, 1);
    }

    public accept(visitor: Visitor): void {
        var i = 0,
            max = this.elements.length;

        for(; i < max; i += 1) {
            this.elements[i].accept(visitor);
        }
    }
}

(function main() {
    var objs: Objs = new Objs();

    objs.attach(new ConcreteElement1());
    objs.attach(new ConcreteElement2());

    var v1: ConcreteVisitor1 = new ConcreteVisitor1(),
        v2: ConcreteVisitor2 = new ConcreteVisitor2();

    objs.accept(v1);
    objs.accept(v2);
}());