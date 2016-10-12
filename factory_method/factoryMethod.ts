namespace FactoryMethodPattern {

    export interface AbstractProduct {
        method(param?: any) : void;
    }

    export class ConcreteProductA implements AbstractProduct {
        method = (param?: any) => {
            return "This is method of ConcreteProductA";
        }
    }

    export class ConcreteProductB implements AbstractProduct {
        method = (param?: any) => {
            return "This is method of ConcreteProductB";
        }
    }


    export class ProductFactory {
        public static createProduct(type: string) : AbstractProduct {
            if (type === "A") {
                return new ConcreteProductA();
            } else if (type === "B") {
                return new ConcreteProductB();
            }

            return null;
        }
    }
}

(function main() {
    var a: FactoryMethodPattern.AbstractProduct = FactoryMethodPattern.ProductFactory.createProduct("A");
    var b: FactoryMethodPattern.AbstractProduct = FactoryMethodPattern.ProductFactory.createProduct("B");

    console.log(a.method());
    console.log(b.method());
}());