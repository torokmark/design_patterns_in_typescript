/// <reference path="factoryMethod.ts" />

namespace FactoryMethodPattern {
	export namespace Demo {
		export function show(): void {
			const productFactoryA: ConcreteFactoryA = new FactoryMethodPattern.ConcreteFactoryA();
			const productA: FactoryMethodPattern.AbstractProduct = productFactoryA.createProduct();

			const productFactoryB: ConcreteFactoryA = new FactoryMethodPattern.ConcreteFactoryB();
			const productB: FactoryMethodPattern.AbstractProduct = productFactoryB.createProduct();

			console.log(productA.method());
		    console.log(productB.method());
			
		};
	}
}

