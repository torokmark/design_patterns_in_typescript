interface AbstractProduct {
    method(param?: any) : void;
}

class ConcreteProductA implements AbstractProduct {
    method = (param?: any) => {
        return "This is method of ConcreteProductA";
    }
}

class ConcreteProductB implements AbstractProduct {
    method = (param?: any) => {
        return "This is method of ConcreteProductB";
    }
}


class ProductFactory {
    public static createProduct(type: string) : AbstractProduct {
        if (type === "A") {
            return new ConcreteProductA();
        } else if (type === "B") {
            return new ConcreteProductB();
        }

        return null;
    }
}

(function main() {
    var a: AbstractProduct = ProductFactory.createProduct("A");
    var b: AbstractProduct = ProductFactory.createProduct("B");

    console.log(a.method());
    console.log(b.method());
}());