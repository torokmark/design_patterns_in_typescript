namespace IteratorPattern {
    export interface Iterator {

        next(): any;
        hasNext(): boolean;
    }

    export interface Aggregator {
        createIterator(): Iterator;
    }

    export class ConcreteIterator implements Iterator {
        private collection: any[] = [];
        private position: number = 0;

        constructor(collection: any[]) {
            this.collection = collection;
        }

        public next(): any {
            // Error handling is left out
            var result = this.collection[this.position];
            this.position += 1;
            return result;
        }

        public hasNext(): boolean {
            return this.position < this.collection.length;
        }
    }

    export class Numbers implements Aggregator {
        private collection: number[] = [];

        constructor(collection: number[]) {
            this.collection = collection;
        }
        public createIterator(): Iterator {
            return new ConcreteIterator(this.collection);
        }
    }
}

