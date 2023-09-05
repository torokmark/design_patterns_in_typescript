/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="chainOfResponsibility.ts" />
namespace ChainOfResponsibilityPattern {
	export namespace Demo {

		export function show() : void {
			const h1: ChainOfResponsibilityPattern.Handler = new ChainOfResponsibilityPattern.ConcreteHandler1(3);
			const h2: ChainOfResponsibilityPattern.Handler = new ChainOfResponsibilityPattern.ConcreteHandler2(7);
			const h3: ChainOfResponsibilityPattern.Handler = new ChainOfResponsibilityPattern.ConcreteHandler3(20);
			const reqs: number[] = [2, 7, 23, 34, 4, 5, 8, 3];
			let i: number
			let max: number;

			h1.setHandler(h2);
			h2.setHandler(h3);

			for (i = 0, max = reqs.length; i < max; i += 1) {
				h1.operation("operation is fired!", reqs[i]);
			}
		}
	}
}
