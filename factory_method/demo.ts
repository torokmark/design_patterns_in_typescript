/// <reference path="factoryMethod.ts" />

namespace FactoryMethodPattern {
	export namespace Demo {
		export function show() : void {
		    var a: FactoryMethodPattern.AbstractProduct = FactoryMethodPattern.ProductFactory.createProduct("A");
		    var b: FactoryMethodPattern.AbstractProduct = FactoryMethodPattern.ProductFactory.createProduct("B");

		    console.log(a.method());
		    console.log(b.method());
		};
	}
}

