/// <reference path="interpreter.ts" />
namespace InterpreterPattern {
	export namespace Demo {

		export function show() : void {
			var context: InterpreterPattern.Context = new InterpreterPattern.Context(),
				list = [],
				i = 0,
				max;

			list.push(new InterpreterPattern.NonterminalExpression());
			list.push(new InterpreterPattern.NonterminalExpression());
			list.push(new InterpreterPattern.NonterminalExpression());
			list.push(new InterpreterPattern.TerminalExpression());
			list.push(new InterpreterPattern.NonterminalExpression());
			list.push(new InterpreterPattern.NonterminalExpression());
			list.push(new InterpreterPattern.TerminalExpression());
			list.push(new InterpreterPattern.TerminalExpression());

			for (i = 0, max = list.length; i < max; i += 1) {
				list[i].interpret(context);
			}


		}
	}
}
