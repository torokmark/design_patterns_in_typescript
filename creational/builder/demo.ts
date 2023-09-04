/// <reference path="builder.ts" />

namespace BuilderPattern {
	export namespace Demo {
		export function show() : void {
			var u: BuilderPattern.User = new BuilderPattern.UserBuilder("Jancsi")
                        .setAge(12)
                        .setPhone("0123456789")
                        .setAddress("asdf")
                        .build();
    		console.log(u.Name + " " + u.Age + " " + u.Phone + " " + u.Address);
		}
	}
}

