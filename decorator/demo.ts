/// <reference path="decorator.ts" />
namespace DecoratorPattern {
	export namespace Demo {

		export function show() : void {
			var decorator1: DecoratorPattern.Decorator = new DecoratorPattern.ConcreteDecorator(1, new DecoratorPattern.ConcreteComponent("Comp1"));

			decorator1.operation();
		}
	}
}

