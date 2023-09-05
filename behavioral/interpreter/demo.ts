/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="interpreter.ts" />
namespace InterpreterPattern {
	export namespace Demo {

		export function show() : void {
			const context: InterpreterPattern.Context = new InterpreterPattern.Context()
			const list = []
			let max: number;

			list.push(new InterpreterPattern.NonterminalExpression());
			list.push(new InterpreterPattern.NonterminalExpression());
			list.push(new InterpreterPattern.NonterminalExpression());
			list.push(new InterpreterPattern.TerminalExpression());
			list.push(new InterpreterPattern.NonterminalExpression());
			list.push(new InterpreterPattern.NonterminalExpression());
			list.push(new InterpreterPattern.TerminalExpression());
			list.push(new InterpreterPattern.TerminalExpression());

			for (let i = 0, max = list.length; i < max; i += 1) {
				list[i].interpret(context);
			}
		}
	}
}
