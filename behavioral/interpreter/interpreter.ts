/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
namespace InterpreterPattern {
    export class Context {
    }

    export interface AbstractExpression {
        interpret(context: Context): void;
    }

    export class TerminalExpression implements AbstractExpression {
        public interpret(context: Context): void {
            console.log("`interpret` method of TerminalExpression is being called!");
        }
    }

    export class NonterminalExpression implements AbstractExpression {

        public interpret(context: Context): void {
            console.log("`interpret` method of NonterminalExpression is being called!");
        }
    }
}