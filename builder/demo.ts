/// <reference path="builder.ts" />

namespace BuilderPattern {
	export namespace Demo {
		export function show() : void {
			let userBuilder: BuilderPattern.UserBuilder = new BuilderPattern.UserBuilder("Jancsi")
						
			let director: BuilderPattern.Director = new BuilderPattern.Director(userBuilder);
			director.makeUser();

			let user: BuilderPattern.User = userBuilder.getResult();
    		console.log(user.Name + " " + user.Age + " " + user.Phone + " " + user.Address);
		}
	}
}

