namespace InterPreterPattern {
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
(function main() {
    var context: InterPreterPattern.Context = new InterPreterPattern.Context(),
        list = [],
        i = 0,
        max;

    list.push(new InterPreterPattern.NonterminalExpression());
    list.push(new InterPreterPattern.NonterminalExpression());
    list.push(new InterPreterPattern.NonterminalExpression());
    list.push(new InterPreterPattern.TerminalExpression());
    list.push(new InterPreterPattern.NonterminalExpression());
    list.push(new InterPreterPattern.NonterminalExpression());
    list.push(new InterPreterPattern.TerminalExpression());
    list.push(new InterPreterPattern.TerminalExpression());

    for (i = 0, max = list.length; i < max; i += 1) {
        list[i].interpret(context);
    }
}());