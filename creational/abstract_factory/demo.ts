/// <reference path="abstractFactory.ts" />

namespace AbstractFactoryPattern {
	export namespace Demo {
		export function show() {
    		// Abstract factory1
		    var factory1: AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.ConcreteFactory1();
    		var tester1: AbstractFactoryPattern.Tester = new AbstractFactoryPattern.Tester(factory1);
		    tester1.test();

		    // Abstract factory2
		    var factory2: AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.ConcreteFactory2();
			var tester2: AbstractFactoryPattern.Tester = new AbstractFactoryPattern.Tester(factory2);
		    tester2.test();
		}
	}
}

