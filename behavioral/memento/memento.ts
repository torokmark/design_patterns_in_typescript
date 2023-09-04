namespace MementoPattern {
    export class State {
        private str: string;

        constructor(str: string) {
            this.str = str;
        }

        get Str() : string {
            return this.str;
        }

        set Str(str: string) {
            this.str = str;
        }
    }

    export class Originator {
        private state: State;

        constructor(state: State) {
            this.state = state;
        }

        get State(): State {
            return this.state;
        }

        set State(state: State) {
            console.log("State :: ", state);
            this.state = state;
        }

        public createMemento(): Memento {
            console.log("creates a memento with a given state!");
            return new Memento(this.state);
        }

        public setMemento(memento: Memento) {
            console.log("sets the state back");
            this.State = memento.State;
        }
    }

    export class Memento {
        private state: State;

        constructor (state: State) {
            this.state = state;
        }

        get State(): State {
            console.log("get memento's state");
            return this.state;
        }
    }

    export class CareTaker {
        private memento: Memento;

        get Memento(): Memento {
            return this.memento;
        }

        set Memento(memento: Memento) {
            this.memento = memento;
        }
    }
}
