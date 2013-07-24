var ConcreteStateA = (function () {
    function ConcreteStateA() {
    }
    ConcreteStateA.prototype.handle = function (context) {
        console.log("`handle` method of ConcreteStateA is being called!");
        context.State = new ConcreteStateB();
    };
    return ConcreteStateA;
})();

var ConcreteStateB = (function () {
    function ConcreteStateB() {
    }
    ConcreteStateB.prototype.handle = function (context) {
        console.log("`handle` method of ConcreteStateB is being called!");
        context.State = new ConcreteStateA();
    };
    return ConcreteStateB;
})();

var Context = (function () {
    function Context(state) {
        this.state = state;
    }
    Object.defineProperty(Context.prototype, "State", {
        get: function () {
            return this.state;
        },
        set: function (state) {
            this.state = state;
        },
        enumerable: true,
        configurable: true
    });


    Context.prototype.request = function () {
        console.log("request is being called!");
        this.state.handle(this);
    };
    return Context;
})();

((function main() {
    var context = new Context(new ConcreteStateA());
    context.request();
    context.request();
    context.request();
    context.request();
    context.request();
    context.request();
    context.request();
    context.request();
})());
