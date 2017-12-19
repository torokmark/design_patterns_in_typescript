/// <reference path="singleton/demo.ts" />
/// <reference path="abstract_factory/demo.ts" />
/// <reference path="factory_method/demo.ts" />
/// <reference path="builder/demo.ts" />
/// <reference path="prototype/demo.ts" />
/// <reference path="adapter/demo.ts" />
/// <reference path="bridge/demo.ts" />
/// <reference path="composite/demo.ts" />
/// <reference path="decorator/demo.ts" />
/// <reference path="facade/demo.ts" />
/// <reference path="flyweight/demo.ts" />
/// <reference path="proxy/demo.ts" />
/// <reference path="chain_of_responsibility/demo.ts" />
/// <reference path="command/demo.ts" />
/// <reference path="interpreter/demo.ts" />
/// <reference path="iterator/demo.ts" />
/// <reference path="mediator/demo.ts" />
/// <reference path="memento/demo.ts" />
/// <reference path="observer/demo.ts" />
/// <reference path="state/demo.ts" />
/// <reference path="strategy/demo.ts" />
/// <reference path="template_method/demo.ts" />
/// <reference path="visitor/demo.ts" />
//
//
//
declare var require : (moduleId : string) => any;
declare var process : any;

var readline = require('readline');

namespace Patterns {


	function printMenu() : void {
		var menu =	"= Creational Patterns == \n" +
					"  1: Singleton \n" +
					"  2: Abstract factory \n" +
					"  3: Factory method \n" +
					"  4: Builder \n" +
					"  5: Prototype \n\n" +
					"= Structural Patterns == \n" +
					"  6: Adapter \n" +
					"  7: Bridge \n" +
					"  8: Composite \n" +
					"  9: Decorator \n" +
					" 10: Facade \n" +
					" 11: Flyweight \n" +
					" 12: Proxy \n\n" +
					"= Behavioral Patterns == \n" +
					" 13: Chain of responsibility \n" +
					" 14: Command \n" +
					" 15: Interpreter \n" +
					" 16: Iterator \n" +
					" 17: Mediator \n" +
					" 18: Memento \n" +
					" 19: Observer \n" +
					" 20: State \n" +
					" 21: Strategy \n" +
					" 22: Template method \n" +
					" 23: Visitor \n";


		console.log("\n\n");
		console.log("==== Choose one pattern to demonstrate ====");
		console.log("\n");
		console.log(menu);
	}

	export function menu() : void {
		var rl = readline.createInterface({
					input: process.stdin,
					output: process.stdout
			});

		printMenu();
	   	rl.question("Which pattern would you like to check?   ", function(answer) {
			switch(+answer) {
				case 1 : show(SingletonPattern); break;
				case 2 : show(AbstractFactoryPattern); break;
				case 3 : show(FactoryMethodPattern); break;
				case 4 : show(BuilderPattern); break;
				case 5 : show(PrototypePattern); break;
				case 6 : show(AdapterPattern); break;
				case 7 : show(BridgePattern); break;
				case 8 : show(CompositePattern); break;
				case 9 : show(DecoratorPattern); break;
				case 10 : show(FacadePattern); break;
				case 11 : show(FlyweightPattern); break;
				case 12 : show(ProxyPattern); break;
				case 13 : show(ChainOfResponsibilityPattern); break;
				case 14 : show(CommandPattern); break;
				case 15 : show(InterpreterPattern); break;
				case 16 : show(IteratorPattern); break;
				case 17 : show(MediatorPattern); break;
				case 18 : show(MementoPattern); break;
				case 19 : show(ObserverPattern); break;
				case 20 : show(StatePattern); break;
				case 21 : show(StrategyPattern); break;
				case 22 : show(TemplateMethodPattern); break;
				case 23 : show(VisitorPattern); break;
				default : break;
			}
			rl.close();
		});
	}

	function show(Pattern : any) : void {
		Pattern.Demo.show();
	}
}

Patterns.menu();
