/// <reference path="iterator.ts" />
namespace IteratorPattern {
	export namespace Demo {

		export function show() : void {
		    var nArray = [1, 7, 21, 657, 3, 2, 765, 13, 65],
				numbers: IteratorPattern.Numbers = new IteratorPattern.Numbers(nArray),
				it: IteratorPattern.ConcreteIterator = <IteratorPattern.ConcreteIterator>numbers.createIterator();

			while (it.hasNext()) {
				console.log(it.next());
			}

		}
	}
}
