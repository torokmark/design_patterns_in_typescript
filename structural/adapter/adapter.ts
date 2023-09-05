/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
namespace AdapterPattern {
    export class Adaptee {
        public method(): void {
            console.log("`method` of Adaptee is being called");
        }
    }

    export interface Target {
        call(): void;
    }

    export class Adapter implements Target {
        public call(): void {
            console.log("Adapter's `call` method is being called");
            const adaptee: Adaptee = new Adaptee();
            adaptee.method();
        }
    }
}
