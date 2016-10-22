/// <reference path="bridge.ts" />
namespace BridgePattern {
	export namespace Demo {

		export function show() : void {
		    var abstractionA: BridgePattern.Abstraction = new BridgePattern.RefinedAbstractionA(new BridgePattern.ConcreteImplementorA());
		    var abstractionB: BridgePattern.Abstraction = new BridgePattern.RefinedAbstractionB(new BridgePattern.ConcreteImplementorB());

			abstractionA.callIt("abstractionA");
			abstractionB.callIt("abstractionB");
		}
	}
}

