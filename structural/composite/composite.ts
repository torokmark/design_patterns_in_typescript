/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
namespace CompositePattern {
    export interface Component {
        operation(): void;
    }

    export class Composite implements Component {

        private list: Component[];
        private s: string;

        constructor(s: string) {
            this.list = [];
            this.s = s;
        }

        public operation(): void {
            console.log("`operation of `", this.s)
            for (let i = 0; i < this.list.length; i += 1) {
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
        private s: string;
        constructor(s: string) {
            this.s = s;
        }
        public operation(): void {
            console.log("`operation` of Leaf", this.s, " is called.");
        }
    }
}

