namespace AbstractFactoryPattern {
    export interface AbstractProductA {
        methodA(): string;
    }
    export interface AbstractProductB {
        methodB(): number;
    }

    export interface AbstractFactory {
        createProductA(param?: any) : AbstractProductA;
        createProductB() : AbstractProductB;
    }


    export class ProductA1 implements AbstractProductA {
        methodA = () => {
            return "This is methodA of ProductA1";
        }
    }
    export class ProductB1 implements AbstractProductB {
        methodB = () => {
            return 1;
        }
    }

    export class ProductA2 implements AbstractProductA {
        methodA = () => {
            return "This is methodA of ProductA2";
        }
    }
    export class ProductB2 implements AbstractProductB {
        methodB = () => {
            return 2;
        }
    }


    export class ConcreteFactory1 implements AbstractFactory {
        createProductA(param?: any) : AbstractProductA {
            return new ProductA1();
        }

        createProductB(param?: any) : AbstractProductB {
            return new ProductB1();
        }
    }
    export class ConcreteFactory2 implements AbstractFactory {
        createProductA(param?: any) : AbstractProductA {
            return new ProductA2();
        }

        createProductB(param?: any) : AbstractProductB {
            return new ProductB2();
        }
    }


    export class Tester {
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

 }  

(function main() {

    // Abstract factory1
    var factory1: AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.ConcreteFactory1();
    var tester1: AbstractFactoryPattern.Tester = new AbstractFactoryPattern.Tester(factory1);
    tester1.test();

    // Abstract factory2
    var factory2: AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.ConcreteFactory2();
    var tester2: AbstractFactoryPattern.Tester = new AbstractFactoryPattern.Tester(factory2);
    tester2.test();

}());