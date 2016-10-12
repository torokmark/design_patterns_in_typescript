namespace PrototypePattern {
    export interface Prototype {
        clone(): Prototype;
        toString(): string;
    }

    export class Concrete1 implements Prototype {

        clone() : Prototype {
            return new Concrete1();
        }

        toString(): string {
            return "This is Concrete1";
        }
    }

    export class Concrete2 implements Prototype {

        clone() : Prototype {
            return new Concrete2();
        }

        toString(): string {
            return "This is Concrete2";
        }
    }

    export class Concrete3 implements Prototype {

        clone() : Prototype {
            return new Concrete3();
        }

        toString(): string {
            return "This is Concrete3";
        }
    }


    export class Builder {
        private prototypeMap: { [s: string]: Prototype; } = {};

        constructor() {
            this.prototypeMap['c1'] = new Concrete1();
            this.prototypeMap['c2'] = new Concrete2();
            this.prototypeMap['c3'] = new Concrete3();
        }

        createOne(s: string): Prototype {
            console.log(s);
            return this.prototypeMap[s].clone();
        }
    }
}

(function main() {
    var builder : PrototypePattern.Builder = new PrototypePattern.Builder();
    var i = 0;
    for (i = 1; i <= 3; i += 1) {
        console.log(builder.createOne("c" + i).toString());
    }
}());