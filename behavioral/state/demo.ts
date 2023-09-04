/// <reference path="state.ts" />
namespace StatePattern {
	export namespace Demo {

		export function show() : void {
			var context: StatePattern.Context = new StatePattern.Context(new StatePattern.ConcreteStateA());
			context.request();
			context.request();
			context.request();
			context.request();
			context.request();
			context.request();
			context.request();
			context.request();

		}
	}
}
