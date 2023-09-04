/// <reference path="flyweight.ts" />
namespace FlyweightPattern {
	export namespace Demo {
		export function show() : void {
		    var factory: FlyweightPattern.FlyweightFactory   = new FlyweightPattern.FlyweightFactory(),

			conc1: FlyweightPattern.ConcreteFlyweight    = <FlyweightPattern.ConcreteFlyweight>factory.getFlyweight("conc1"),
			conc2: FlyweightPattern.ConcreteFlyweight    = <FlyweightPattern.ConcreteFlyweight>factory.getFlyweight("conc2");

			conc1.operation("1");
			conc2.operation("2");
		}
	}
}

