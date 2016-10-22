namespace CompositePattern {
    export interface Component {
        operation(): void;
    }

    export class Composite implements Component {

        private list: Component[];
        private s: String;

        constructor(s: String) {
            this.list = [];
            this.s = s;
        }

        public operation(): void {
            console.log("`operation of `", this.s)
            for (var i = 0; i < this.list.length; i += 1) {
                this.list[i].operation();
            }
        }

        public add(c: Component): void {
            this.list.push(c);
        }

        public remove(i: number): void {
            if (this.list.length <= i) {
                throw new Error("index out of bound!");
            }
            this.list.splice(i, 1);
        }
    }

    export class Leaf implements Component {
        private s: String;
        constructor(s: String) {
            this.s = s;
        }
        public operation(): void {
            console.log("`operation` of Leaf", this.s, " is called.");
        }
    }
}

