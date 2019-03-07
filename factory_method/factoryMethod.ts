namespace FactoryMethodPattern {

    export interface AbstractProduct {
        method(param?: any): void;
    }

    export class ConcreteProductA implements AbstractProduct {
        method = (param?: any) => {
            return "Method of ConcreteProductA";
        }
    }

    export class ConcreteProductB implements AbstractProduct {
        method = (param?: any) => {
            return "Method of ConcreteProductB";
        }
    }

    export abstract class AbstractFactory {
        abstract createProduct(): AbstractProduct;
    }

    export class ConcreteFactoryA extends AbstractFactory {
        createProduct(): AbstractProduct {
            return new ConcreteProductA();
        }
    }

    export class ConcreteFactoryB extends AbstractFactory {
        createProduct(): AbstractProduct {
            return new ConcreteProductB();
        }
    }

}
