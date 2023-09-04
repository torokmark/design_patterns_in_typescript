/// <reference path="mediator.ts" />
namespace MediatorPattern {
	export namespace Demo {

		export function show() : void {
			var cm: MediatorPattern.ConcreteMediator = new MediatorPattern.ConcreteMediator(),
				c1: MediatorPattern.ConcreteColleagueA = new MediatorPattern.ConcreteColleagueA(cm),
				c2: MediatorPattern.ConcreteColleagueB = new MediatorPattern.ConcreteColleagueB(cm);

			cm.concreteColleagueA = c1;
			cm.concreteColleagueB = c2;

			c1.send("`send` of ConcreteColleagueA is being called!");
			c2.send("`send` of ConcreteColleagueB is being called!");

		}
	}
}
