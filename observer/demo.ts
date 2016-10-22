/// <reference path="observer.ts" />
namespace ObserverPattern {
	export namespace Demo {

		export function show() : void {
			var sub: ObserverPattern.ConcreteSubject = new ObserverPattern.ConcreteSubject();

			sub.register(new ObserverPattern.ConcreteObserver(sub, "Jancsi"));
			sub.register(new ObserverPattern.ConcreteObserver(sub, "Julcsa"));
			sub.register(new ObserverPattern.ConcreteObserver(sub, "Marcsa"));

			sub.SubjectState = 123;
			sub.notify();

		}
	}
}
