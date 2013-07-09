class Adaptee {
	public method(): void {
		console.log("`method` of Adaptee is being called");
	}
}

interface Target {
	call(): void;
}

class Adapter implements Target {
	public call(): void {
		console.log("Adapter's `call` method is being called");
		var adaptee: Adaptee = new Adaptee();
		adaptee.method();
	}
}

(function main() {
	var adapter: Adapter = new Adapter();
	adapter.call();
}());