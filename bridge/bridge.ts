namespace BridgePattern {

    export class Abstraction {
        implementor: Implementor;
        constructor(imp: Implementor) {
            this.implementor = imp;
        }

        public callIt(s: String): void {
            throw new Error("This method is abstract!");
        }
    }

    export class RefinedAbstractionA extends Abstraction {
        constructor(imp: Implementor) {
            super(imp);
        }

        public callIt(s: String): void {
            console.log("This is RefinedAbstractionA");
            this.implementor.callee(s);
        }
    }

    export class RefinedAbstractionB extends Abstraction {
        constructor(imp: Implementor) {
            super(imp);
        }

        public callIt(s: String): void {
            console.log("This is RefinedAbstractionB");
            this.implementor.callee(s);
        }
    }

    export interface Implementor {
        callee(s: any): void;
    }

    export class ConcreteImplementorA implements Implementor {
        public callee(s: any) : void {
            console.log("`callee` of ConcreteImplementorA is being called.");
            console.log(s);
        }
    }

    export class ConcreteImplementorB implements Implementor {
        public callee(s: any) : void {
            console.log("`callee` of ConcreteImplementorB is being called.");
            console.log(s);
        }
    }
}
