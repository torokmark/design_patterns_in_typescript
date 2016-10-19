/// <reference path="singleton.ts" />
namespace SingletonPattern {
	export namespace Demo {

		export function show() : void {
			var singleton1 = SingletonPattern.Singleton.Instance;
			var singleton2 = SingletonPattern.Singleton.Instance;

			if (singleton1 === singleton2) {
				console.log("two singletons are equivalent");
			} else {
				console.log("two singletons are not equivalent");
			}
		}
	}
}

SingletonPattern.Demo.show();
