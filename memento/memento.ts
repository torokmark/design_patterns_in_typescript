
class State {
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

class Originator {
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

class Memento {
    private state: State;

    constructor (state: State) {
        this.state = state;
    }

    get State(): State {
        console.log("get memento's state");
        return this.state;
    }
}

class CareTaker {
    private memento: Memento;

    get Memento(): Memento {
        return this.memento;
    }

    set Memento(memento: Memento) {
        this.memento = memento;
    }
}

(function main() {
    var state: State = new State("... State "),
        originator: Originator = new Originator(state),
        careTaker: CareTaker = new CareTaker();

    careTaker.Memento = originator.createMemento();
    originator.State = new State("something else...");

    originator.setMemento(careTaker.Memento);
}());