/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="adapter.ts" />
namespace AdapterPattern {
	export namespace Demo {

		export function show() : void {
			const adapter: AdapterPattern.Adapter = new AdapterPattern.Adapter();
			adapter.call();
		}
	}
}
