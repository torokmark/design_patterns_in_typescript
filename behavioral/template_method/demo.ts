/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="templateMethod.ts" />
namespace TemplateMethodPattern {
	export namespace Demo {

		export function show() : void {
			const c1: TemplateMethodPattern.ConcreteClass1 = new TemplateMethodPattern.ConcreteClass1()
			const c2: TemplateMethodPattern.ConcreteClass2 = new TemplateMethodPattern.ConcreteClass2();

			c1.templateMethod();
			c2.templateMethod();
		}
	}
}
