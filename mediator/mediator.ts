namespace MediatorPattern {
    export interface Mediator {
        send(msg: string, colleague: Colleague): void;
    }

    export class Colleague {
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

    export class ConcreteColleagueA extends Colleague {
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

    export class ConcreteColleagueB extends Colleague {
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

    export class ConcreteMediator implements Mediator {
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
}
