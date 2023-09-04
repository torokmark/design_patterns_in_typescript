/// <reference path="command.ts" />
namespace CommandPattern {
	export namespace Demo {

		export function show() : void {
		    var receiver: CommandPattern.Receiver = new CommandPattern.Receiver(),
				command1: CommandPattern.Command  = new CommandPattern.ConcreteCommand1(receiver),
				command2: CommandPattern.Command  = new CommandPattern.ConcreteCommand2(receiver),
				invoker : CommandPattern.Invoker  = new CommandPattern.Invoker();

			invoker.storeAndExecute(command1);
			invoker.storeAndExecute(command2);


		}
	}
}
