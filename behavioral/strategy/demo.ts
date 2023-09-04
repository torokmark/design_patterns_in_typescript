/// <reference path="strategy.ts" />
namespace StrategyPattern {
	export namespace Demo {

		export function show() : void {
		    var context: StrategyPattern.Context = new StrategyPattern.Context(new StrategyPattern.ConcreteStrategy1());

			context.executeStrategy();

			context = new StrategyPattern.Context(new StrategyPattern.ConcreteStrategy2());
			context.executeStrategy();

			context = new StrategyPattern.Context(new StrategyPattern.ConcreteStrategy3());
			context.executeStrategy();


		}
	}
}
