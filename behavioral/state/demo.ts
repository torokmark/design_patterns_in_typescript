/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="state.ts" />
namespace StatePattern {
	export namespace Demo {

		export function show() : void {
			const context: StatePattern.Context = new StatePattern.Context(new StatePattern.ConcreteStateA());
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
