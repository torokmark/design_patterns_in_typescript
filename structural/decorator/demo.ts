/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="decorator.ts" />
namespace DecoratorPattern {
	export namespace Demo {

		export function show() : void {
			const decorator1: DecoratorPattern.Decorator = new DecoratorPattern.ConcreteDecorator(1, 
				new DecoratorPattern.ConcreteComponent("Comp1"));

			decorator1.operation();
		}
	}
}

