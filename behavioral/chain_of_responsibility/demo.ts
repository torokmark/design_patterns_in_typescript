/// <reference path="chainOfResponsibility.ts" />
namespace ChainOfResponsibilityPattern {
	export namespace Demo {

		export function show() : void {
		    var h1: ChainOfResponsibilityPattern.Handler,
				h2: ChainOfResponsibilityPattern.Handler,
				h3: ChainOfResponsibilityPattern.Handler,
				reqs: number[],
				i: number,
				max: number;

			reqs = [2, 7, 23, 34, 4, 5, 8, 3];

			h1 = new ChainOfResponsibilityPattern.ConcreteHandler1(3);
			h2 = new ChainOfResponsibilityPattern.ConcreteHandler2(7);
			h3 = new ChainOfResponsibilityPattern.ConcreteHandler3(20);

			h1.setHandler(h2);
			h2.setHandler(h3);

			for (i = 0, max = reqs.length; i < max; i += 1) {
				h1.operation("operation is fired!", reqs[i]);
			}

		}
	}
}

