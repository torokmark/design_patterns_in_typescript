/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="strategy.ts" />
namespace StrategyPattern {
	export namespace Demo {

		export function show() : void {
			let context: StrategyPattern.Context = new StrategyPattern.Context(new StrategyPattern.ConcreteStrategy1());

			context.executeStrategy();

			context = new StrategyPattern.Context(new StrategyPattern.ConcreteStrategy2());
			context.executeStrategy();

			context = new StrategyPattern.Context(new StrategyPattern.ConcreteStrategy3());
			context.executeStrategy();
		}
	}
}
