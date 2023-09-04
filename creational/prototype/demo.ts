/// <reference path="prototype.ts" />

namespace PrototypePattern {
	export namespace Demo {
		export function show() : void {
			var builder : PrototypePattern.Builder = new PrototypePattern.Builder();
	    	var i = 0;
    		for (i = 1; i <= 3; i += 1) {
	        	console.log(builder.createOne("c" + i).toString());
    		}

		}
	}
}
