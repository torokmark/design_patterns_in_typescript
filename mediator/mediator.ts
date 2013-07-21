interface Mediator {
    send(msg: string, colleague: Colleague): void;
}

class Colleague {
    public mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    public send(msg: string): void {
        throw new Error("Abstract Method!");
    }

    public receive(msg: string): void {
        throw new Error("Abstract Method!");
    }
}



class ConcreteColleagueA extends Colleague {
    constructor(mediator: Mediator) {
        super(mediator);
    }

    public send(msg: string): void {
        this.mediator.send(msg, this);
    }

    public receive(msg: string): void {
        console.log(msg, "`receive` of ConcreteColleagueA is being called!");
    }
}

class ConcreteColleagueB extends Colleague {
    constructor(mediator: Mediator) {
        super(mediator);
    }

    public send(msg: string): void {
        this.mediator.send(msg, this);
    }

    public receive(msg: string): void {
        console.log(msg, "`receive` of ConcreteColleagueB is being called!");
    }
}

class ConcreteMediator implements Mediator {
    public concreteColleagueA: ConcreteColleagueA;
    public concreteColleagueB: ConcreteColleagueB;

    public send(msg: string, colleague: Colleague): void {
        if (this.concreteColleagueA === colleague) {
            this.concreteColleagueB.receive(msg);
        } else {
            this.concreteColleagueA.receive(msg);
        }
    }
}

(function main() {
    var cm: ConcreteMediator = new ConcreteMediator(),
        c1: ConcreteColleagueA = new ConcreteColleagueA(cm),
        c2: ConcreteColleagueB = new ConcreteColleagueB(cm);

    cm.concreteColleagueA = c1;
    cm.concreteColleagueB = c2;

    c1.send("`send` of ConcreteColleagueA is being called!");
    c2.send("`send` of ConcreteColleagueB is being called!");

}());