/// <reference path="builder.ts" />

namespace BuilderPattern {
	export namespace Demo {
		export function show() : void {
			let userBuilder: BuilderPattern.UserBuilder = new BuilderPattern.UserBuilder("Jancsi");
						
			let director: BuilderPattern.UserDirector = new BuilderPattern.UserDirector(userBuilder);
			let user: BuilderPattern.User = director.create();

    		console.log(user.Name + " " + user.Age + " " + user.Phone + " " + user.Address);
		}
	}
}
