namespace ChainOfResponsibilityPattern {

    export class Handler {
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

    export class ConcreteHandler1 extends Handler {
        constructor(req: number) {
            super(req);
        }
        public handlerRequest(msg: string) {
            console.log("Message (ConcreteHandler1) :: ", msg);
        }
    }


    export class ConcreteHandler2 extends Handler {
        constructor(req: number) {
            super(req);
        }
        public handlerRequest(msg: string) {
            console.log("Message :: (ConcreteHandler2) ", msg);
        }
    }

    export class ConcreteHandler3 extends Handler {
        constructor(req: number) {
            super(req);
        }
        public handlerRequest(msg: string) {
            console.log("Message :: (ConcreteHandler3) ", msg);
        }
    }
}

(function main() {
    var h1: ChainOfResponsibilityPattern.Handler,
        h2: ChainOfResponsibilityPattern.Handler,
        h3: ChainOfResponsibilityPattern.Handler,
        reqs: number[],
        i: number,
        max: number;

    reqs = [2, 7, 23, 34, 4, 5, 8, 3];

    h1 = new ChainOfResponsibilityPattern.ConcreteHandler1(3);
    h2 = new ChainOfResponsibilityPattern.ConcreteHandler2(7);
    h3 = new ChainOfResponsibilityPattern.ConcreteHandler3(20);

    h1.setHandler(h2);
    h2.setHandler(h3);

    for (i = 0, max = reqs.length; i < max; i += 1) {
        h1.operation("operation is fired!", reqs[i]);
    }
}());