/// <reference path="templateMethod.ts" />
namespace TemplateMethodPattern {
	export namespace Demo {

		export function show() : void {
			var c1: TemplateMethodPattern.ConcreteClass1 = new TemplateMethodPattern.ConcreteClass1(),
				c2: TemplateMethodPattern.ConcreteClass2 = new TemplateMethodPattern.ConcreteClass2();

			c1.templateMethod();
			c2.templateMethod();

		}
	}
}
