/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="singleton.ts" />
namespace SingletonPattern {
	export namespace Demo {

		export function show() : void {
			const singleton1 = SingletonPattern.Singleton.getInstance();
			const singleton2 = SingletonPattern.Singleton.getInstance();

			if (singleton1 === singleton2) {
				console.log("two singletons are equivalent");
			} else {
				console.log("two singletons are not equivalent");
			}
		}
	}
}

