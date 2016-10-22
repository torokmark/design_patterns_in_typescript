/// <reference path="memento.ts" />
namespace MementoPattern {
	export namespace Demo {

		export function show() : void {
			var state: MementoPattern.State = new MementoPattern.State("... State "),
				originator: MementoPattern.Originator = new MementoPattern.Originator(state),
				careTaker: MementoPattern.CareTaker = new MementoPattern.CareTaker();

			careTaker.Memento = originator.createMemento();
			originator.State = new MementoPattern.State("something else...");

			originator.setMemento(careTaker.Memento);
		}
	}
}
