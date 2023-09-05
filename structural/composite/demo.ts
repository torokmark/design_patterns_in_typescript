/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="composite.ts" />
namespace CompositePattern {
	export namespace Demo {
		export function show() : void {
			const leaf1 = new CompositePattern.Leaf("1")
			const leaf2 = new CompositePattern.Leaf("2")
			const leaf3 = new CompositePattern.Leaf("3")
			const composite1 = new CompositePattern.Composite("Comp1")
			const composite2 = new CompositePattern.Composite("Comp2")

			composite1.add(leaf1);
			composite1.add(leaf2);
			composite1.add(leaf3);

			composite1.remove(2);

			composite2.add(leaf1);
			composite2.add(leaf3);

			composite1.operation();
			composite2.operation();
		}
	}
}
