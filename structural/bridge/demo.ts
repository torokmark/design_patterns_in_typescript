/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
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

