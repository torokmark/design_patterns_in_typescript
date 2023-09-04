namespace ObserverPattern {
    export class Subject {
        private observers: Observer[] = [];

        public register(observer: Observer): void {
            console.log(observer, "is pushed!");
            this.observers.push(observer);
        }

        public unregister(observer: Observer): void {
            var n: number = this.observers.indexOf(observer);
            console.log(observer, "is removed");
            this.observers.splice(n, 1);
        }

        public notify(): void {
            console.log("notify all the observers", this.observers);
            var i: number
              , max: number;

            for (i = 0, max = this.observers.length; i < max; i += 1) {
                this.observers[i].notify();
            }
        }
    }

    export class ConcreteSubject extends Subject {
        private subjectState: number;

        get SubjectState(): number {
            return this.subjectState;
        }

        set SubjectState(subjectState: number) {
            this.subjectState = subjectState;
        }
    }

    export class Observer {
        public notify(): void {
            throw new Error("Abstract Method!");
        }
    }

    export class ConcreteObserver extends Observer {
        private name: string;
        private state: number;
        private subject: ConcreteSubject;

        constructor (subject: ConcreteSubject, name: string) {
            super();
            console.log("ConcreteObserver", name, "is created!");
            this.subject = subject;
            this.name = name;
        }

        public notify(): void {
            console.log("ConcreteObserver's notify method");
            console.log(this.name, this.state);
            this.state = this.subject.SubjectState;
        }

        get Subject(): ConcreteSubject {
            return this.subject;
        }

        set Subject(subject: ConcreteSubject) {
            this.subject = subject;
        }
    }
}
