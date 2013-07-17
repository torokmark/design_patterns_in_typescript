class Context {
    
}

interface AbstractExpression {
    interpret(context: Context): void;
}

class TerminalExpression implements AbstractExpression {

    public interpret(context: Context): void {
        console.log("`interpret` method of TerminalExpression is being called!");
    }
}

class NonterminalExpression implements AbstractExpression {

    public interpret(context: Context): void {
        console.log("`interpret` method of NonterminalExpression is being called!");
    }
}

(function main() {
    var context: Context = new Context(),
        list = [],
        i = 0,
        max;

    list.push(new NonterminalExpression());
    list.push(new NonterminalExpression());
    list.push(new NonterminalExpression());
    list.push(new TerminalExpression());
    list.push(new NonterminalExpression());
    list.push(new NonterminalExpression());
    list.push(new TerminalExpression());
    list.push(new TerminalExpression());

    for (i = 0, max = list.length; i < max; i += 1) {
        list[i].interpret(context);
    }
}());