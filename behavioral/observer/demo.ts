/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="observer.ts" />
namespace ObserverPattern {
	export namespace Demo {

		export function show() : void {
			const sub: ObserverPattern.ConcreteSubject = new ObserverPattern.ConcreteSubject();

			sub.register(new ObserverPattern.ConcreteObserver(sub, "Jancsi"));
			sub.register(new ObserverPattern.ConcreteObserver(sub, "Julcsa"));
			sub.register(new ObserverPattern.ConcreteObserver(sub, "Marcsa"));

			sub.SubjectState = 123;
			sub.notify();

		}
	}
}
