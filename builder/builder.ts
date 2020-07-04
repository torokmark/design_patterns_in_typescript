namespace BuilderPattern {
  export interface Builder<T> {
    build(): T;
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
      this.address = builder.Address;
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

  export interface Director<T> {
    create(): T;
  }

  export class UserBuilder implements Builder<User> {
    private name: string;
    private age: number;
    private phone: string;
    private address: string;

    constructor(name: string) {
      this.name = name;
    }

    setAge(value: number): UserBuilder {
      this.age = value;
      return this;
    }

    setPhone(value: string): UserBuilder {
      this.phone = value;
      return this;
    }

    setAddress(value: string): UserBuilder {
      this.address = value;
      return this;
    }

    getUser() {
      return this;
    }

    build(): User {
      return new User(this);
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

  export class UserDirector implements Director<User> {
    constructor(private userBuilder: UserBuilder) {}

    create() {
      if (this.userBuilder.Name === 'Jancsi') {
        this.userBuilder.setAge(12)
        .setPhone('0123456789')
        .setAddress('asdf');
      } else {
        this.userBuilder.setAge(0)
        .setPhone('xxxxxxxxx')
        .setAddress('xxxx');
      }

      return this.userBuilder.build();
    }
  }
}
