/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="command.ts" />
namespace CommandPattern {
	export namespace Demo {

		export function show() : void {
			const receiver: CommandPattern.Receiver = new CommandPattern.Receiver()
			const command1: CommandPattern.Command  = new CommandPattern.ConcreteCommand1(receiver)
			const command2: CommandPattern.Command  = new CommandPattern.ConcreteCommand2(receiver)
			const invoker : CommandPattern.Invoker  = new CommandPattern.Invoker();

			invoker.storeAndExecute(command1);
			invoker.storeAndExecute(command2);
		}
	}
}
