interface AbstractProductA {
    methodA(): string;
}
interface AbstractProductB {
    methodB(): number;
}

interface AbstractFactory {
    createProductA(param?: any) : AbstractProductA;
    createProductB() : AbstractProductB;
}


class ProductA1 implements AbstractProductA {
    methodA = () => {
        return "This is methodA of ProductA1";
    }
}
class ProductB1 implements AbstractProductB {
    methodB = () => {
        return 1;
    }
}

class ProductA2 implements AbstractProductA {
    methodA = () => {
        return "This is methodA of ProductA2";
    }
}
class ProductB2 implements AbstractProductB {
    methodB = () => {
        return 2;
    }
}


class ConcreteFactory1 implements AbstractFactory {
    createProductA(param?: any) : AbstractProductA {
        return new ProductA1();
    }

    createProductB(param?: any) : AbstractProductB {
        return new ProductB1();
    }
}
class ConcreteFactory2 implements AbstractFactory {
    createProductA(param?: any) : AbstractProductA {
        return new ProductA2();
    }

    createProductB(param?: any) : AbstractProductB {
        return new ProductB2();
    }
}


class Tester {
    private abstractProductA: AbstractProductA;
    private abstractProductB: AbstractProductB;

    constructor(factory: AbstractFactory) {
        this.abstractProductA = factory.createProductA();
        this.abstractProductB = factory.createProductB();
    }

    public test(): void {
        console.log(this.abstractProductA.methodA());
        console.log(this.abstractProductB.methodB());
    }
}

(function main() {

    // Abstract factory1
    var factory1: AbstractFactory = new ConcreteFactory1();
    var tester1: Tester = new Tester(factory1);
    tester1.test();

    // Abstract factory2
    var factory2: AbstractFactory = new ConcreteFactory2();
    var tester2: Tester = new Tester(factory2);
    tester2.test();

}());