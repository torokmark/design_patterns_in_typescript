namespace ProxyPattern {
    export interface Subject {
        doAction(): void;
    }

    export class Proxy implements Subject {
        private realSubject: RealSubject;
        private s: string;

        constructor(s: string) {
            this.s = s;
        }

        public doAction(): void {
            console.log("`doAction` of Proxy(", this.s, ")");
            if (this.realSubject === null || this.realSubject === undefined) {
                console.log("creating a new RealSubject.");
                this.realSubject = new RealSubject(this.s);
            }
            this.realSubject.doAction();
        }
    }

    export class RealSubject implements Subject {
        private s: string;

        constructor(s: string) {
            this.s = s;
        }
        public doAction(): void {
            console.log("`doAction` of RealSubject", this.s, "is being called!");
        }
    }
}
