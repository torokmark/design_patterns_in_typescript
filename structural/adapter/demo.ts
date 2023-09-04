/// <reference path="adapter.ts" />
namespace AdapterPattern {
	export namespace Demo {

		export function show() : void {
			var adapter: AdapterPattern.Adapter = new AdapterPattern.Adapter();
			adapter.call();
		}
	}
}
