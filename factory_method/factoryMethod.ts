namespace FactoryMethodPattern {

    export interface AbstractProduct {
        method(param?: any) : void;
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


    export namespace ProductFactory {
        export function createProduct(type: string) : AbstractProduct {
            if (type === "A") {
                return new ConcreteProductA();
            } else if (type === "B") {
                return new ConcreteProductB();
            }

            return null;
        }
    }
}
