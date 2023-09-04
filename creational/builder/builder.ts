namespace BuilderPattern {
    export class UserBuilder {
        private name: string;
        private age: number;
        private phone: string;
        private address: string;

        constructor(name: string) {
            this.name = name;
        }

        get Name() {
            return this.name;
        }
        setAge(value: number): UserBuilder {
            this.age = value;
            return this;
        }
        get Age() {
            return this.age;
        }
        setPhone(value: string): UserBuilder {
            this.phone = value;
            return this;
        }
        get Phone() {
            return this.phone;
        }
        setAddress(value: string): UserBuilder {
            this.address = value;
            return this;
        }
        get Address() {
            return this.address;
        }

        build(): User {
            return new User(this);
        }
    }

    export class User {
        private name: string;
        private age: number;
        private phone: string;
        private address: string;

        constructor(builder: UserBuilder) {
            this.name = builder.Name;
            this.age = builder.Age;
            this.phone = builder.Phone;
            this.address = builder.Address
        }

        get Name() {
            return this.name;
        }
        get Age() {
            return this.age;
        }
        get Phone() {
            return this.phone;
        }
        get Address() {
            return this.address;
        }
    }

}
