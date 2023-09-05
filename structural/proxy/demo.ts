/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="proxy.ts" />
namespace ProxyPattern {
	export namespace Demo {
		export function show() : void {
			const proxy1: ProxyPattern.Proxy = new ProxyPattern.Proxy("proxy1")
			const proxy2: ProxyPattern.Proxy = new ProxyPattern.Proxy("proxy2");

			proxy1.doAction();
			proxy1.doAction();
			proxy2.doAction();
			proxy2.doAction();
			proxy1.doAction();

		}
	}
}

