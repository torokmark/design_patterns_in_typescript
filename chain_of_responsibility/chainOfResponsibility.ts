class Handler {
    private handler: Handler;
    private req: number;

    constructor(req: number) {
        this.req = req;
    }

    public setHandler(handler: Handler): void {
        this.handler = handler;
    }

    public operation(msg: string, req: number): void {
        if (req <= this.req) {
            this.handlerRequest(msg)
        } else if (this.handler !== null && this.handler !== undefined) {
            this.handler.operation(msg, req);
        }
    }

    public handlerRequest(msg: string): void {
        throw new Error("Abstract method!");
    }
}

class ConcreteHandler1 extends Handler {
    constructor(req: number) {
        super(req);
    }
    public handlerRequest(msg: string) {
        console.log("Message (ConcreteHandler1) :: ", msg);
    }
}


class ConcreteHandler2 extends Handler {
    constructor(req: number) {
        super(req);
    }
    public handlerRequest(msg: string) {
        console.log("Message :: (ConcreteHandler2) ", msg);
    }
}

class ConcreteHandler3 extends Handler {
    constructor(req: number) {
        super(req);
    }
    public handlerRequest(msg: string) {
        console.log("Message :: (ConcreteHandler3) ", msg);
    }
}

(function main() {
    var h1: Handler,
        h2: Handler,
        h3: Handler,
        reqs: number[],
        i: number,
        max: number;

    reqs = [2, 7, 23, 34, 4, 5, 8, 3];

    h1 = new ConcreteHandler1(3);
    h2 = new ConcreteHandler2(7);
    h3 = new ConcreteHandler3(20);

    h1.setHandler(h2);
    h2.setHandler(h3);

    for (i = 0, max = reqs.length; i < max; i += 1) {
        h1.operation("operation is fired!", reqs[i]);
    }
}());