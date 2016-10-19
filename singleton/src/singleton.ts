namespace SingletonPattern {
    export class Singleton {
        private static instance: Singleton;

        constructor() {}

        static get Instance() {
            if (this.instance === null || this.instance === undefined) {
                this.instance = new Singleton();
            }
            return this.instance;
        }
    }
}
