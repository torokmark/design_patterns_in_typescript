/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="iterator.ts" />
namespace IteratorPattern {
	export namespace Demo {

		export function show() : void {
				const nArray = [1, 7, 21, 657, 3, 2, 765, 13, 65]
				const numbers: IteratorPattern.Numbers = new IteratorPattern.Numbers(nArray)
				const it: IteratorPattern.ConcreteIterator = <IteratorPattern.ConcreteIterator>numbers.createIterator();

			while (it.hasNext()) {
				console.log(it.next());
			}

		}
	}
}
