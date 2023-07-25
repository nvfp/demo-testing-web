interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Foo bar",
  age: 30,
};

console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
