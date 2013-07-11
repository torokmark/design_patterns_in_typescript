interface Subject {
    doAction(): void;
}

class Proxy implements Subject {
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

class RealSubject implements Subject {
    private s: string;

    constructor(s: string) {
        this.s = s;
    }
    public doAction(): void {
        console.log("`doAction` of RealSubject", this.s, "is being called!");
    }
}

(function main() {
    var proxy1: Proxy = new Proxy("proxy1"),
        proxy2: Proxy = new Proxy("proxy2");

    proxy1.doAction();
    proxy1.doAction();
    proxy2.doAction();
    proxy2.doAction();
    proxy1.doAction();
}());