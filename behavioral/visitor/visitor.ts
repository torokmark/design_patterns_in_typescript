namespace VisitorPattern {
    export interface Visitor {
        visitConcreteElement1(concreteElement1: ConcreteElement1): void;
        visitConcreteElement2(concreteElement2: ConcreteElement2): void;
    }

    export class ConcreteVisitor1 implements Visitor {
        public visitConcreteElement1(concreteElement1: ConcreteElement1): void {
            console.log("`visitConcreteElement1` of ConcreteVisitor1 is being called!");
        }

        public visitConcreteElement2(concreteElement2: ConcreteElement2): void {
            console.log("`visitConcreteElement2` of ConcreteVisitor1 is being called!");
        }
    }

    export class ConcreteVisitor2 implements Visitor {
        public visitConcreteElement1(concreteElement1: ConcreteElement1): void {
            console.log("`visitConcreteElement1` of ConcreteVisitor2 is being called!");
        }

        public visitConcreteElement2(concreteElement2: ConcreteElement2): void {
            console.log("`visitConcreteElement2` of ConcreteVisitor2 is being called!");
        }
    }


    export interface Element {
        operate(visitor: Visitor): void;
    }

    export class ConcreteElement1 implements Element {
        public operate(visitor: Visitor): void {
            console.log("`operate` of ConcreteElement1 is being called!");
            visitor.visitConcreteElement1(this);
        }
    }

    export class ConcreteElement2 implements Element {
        public operate(visitor: Visitor): void {
            console.log("`operate` of ConcreteElement2 is being called!");
            visitor.visitConcreteElement2(this);
        }
    }

    export class Objs {
        private elements: Element[] = [];

        public attach(e: Element): void {
            this.elements.push(e);
        }

        public detach(e: Element): void {
            var index = this.elements.indexOf(e);
            this.elements.splice(index, 1);
        }

        public operate(visitor: Visitor): void {
            var i = 0,
                max = this.elements.length;

            for(; i < max; i += 1) {
                this.elements[i].operate(visitor);
            }
        }
    }

}

