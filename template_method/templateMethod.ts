
class AbstractClass {
    public method1(): void {
        throw new Error("Abstract Method");
    }

    public method2(): void {
        throw new Error("Abstract Method");
    }

    public method3(): void {
        throw new Error("Abstract Method");
    }

    public templateMethod(): void {
        console.log("templateMethod is being called");
        this.method1();
        this.method2();
        this.method3();
    }
}

class ConcreteClass1 extends AbstractClass {
    public method1(): void {
        console.log("method1 of ConcreteClass1");
    }

    public method2(): void {
        console.log("method2 of ConcreteClass1");
    }

    public method3(): void {
        console.log("method3 of ConcreteClass1");
    }
}

class ConcreteClass2 extends AbstractClass {
    public method1(): void {
        console.log("method1 of ConcreteClass2");
    }

    public method2(): void {
        console.log("method2 of ConcreteClass2");
    }

    public method3(): void {
        console.log("method3 of ConcreteClass2");
    }
}

(function main() {
    var c1: ConcreteClass1 = new ConcreteClass1(),
        c2: ConcreteClass2 = new ConcreteClass2();

    c1.templateMethod();
    c2.templateMethod();
}());