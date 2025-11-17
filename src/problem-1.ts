// let value: number|string|boolean;

const formatValue = (value: unknown) => {
  if (typeof value === "number") {
    return value * value;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    return;
  }
};

const getLength = (input: string | (number[] | string[])) => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  } else {
    return;
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const person1 = new Person("Jhone Doe", 22);
const person2 = new Person('Alice',25)

