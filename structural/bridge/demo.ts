/// <reference path="bridge.ts" />
namespace BridgePattern {
	export namespace Demo {

		export function show() : void {
		    const abstractionA: BridgePattern.Abstraction = new BridgePattern.RefinedAbstractionA(new BridgePattern.ConcreteImplementorA());
		    const abstractionB: BridgePattern.Abstraction = new BridgePattern.RefinedAbstractionB(new BridgePattern.ConcreteImplementorB());

			abstractionA.callIt("abstractionA");
			abstractionB.callIt("abstractionB");
		}
	}
}

