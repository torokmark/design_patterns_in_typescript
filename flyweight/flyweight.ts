namespace FlyweightPattern {

    export interface Flyweight {
        operation(s: String): void;
    }

    export class ConcreteFlyweight implements Flyweight {
        private instrinsicState: String;

        constructor(instrinsicState: String) {
            this.instrinsicState = instrinsicState;
        }

        public operation(s: String): void {
            console.log("`operation` of ConcreteFlyweight", s, " is being called!");
        }
    }

    export class UnsharedConcreteFlyweight implements Flyweight {
        private allState: number;

        constructor(allState: number) {
            this.allState = allState;
        }

        public operation(s: String): void {
            console.log("`operation` of UnsharedConcreteFlyweight", s, " is being called!");
        }
    }

    export class FlyweightFactory {

        private fliesMap: { [s: string]: Flyweight; } = <any>{};

        constructor() { }

        public getFlyweight(key: string): Flyweight {

            if (this.fliesMap[key] === undefined || null) {
                this.fliesMap[key] = new ConcreteFlyweight(key);
            }
            return this.fliesMap[key];
        }
    }
}
