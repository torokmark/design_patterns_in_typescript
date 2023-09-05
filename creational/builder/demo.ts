/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="builder.ts" />

namespace BuilderPattern {
	export namespace Demo {
		export function show() : void {
			const u: BuilderPattern.User = new BuilderPattern.UserBuilder("Doe")
                        .setAge(12)
                        .setPhone("0123456789")
                        .setAddress("asdf")
                        .build();
				console.log(u.Name + " " + u.Age + " " + u.Phone + " " + u.Address);

				const u2: BuilderPattern.User = new BuilderPattern.UserBuilder("John")
													.setAge(18)
													.setPhone("987654321")
													.build();
				console.log(u2.Name + " " + u2.Age + " " + u2.Phone + " " + u2.Address);
		}
	}
}
