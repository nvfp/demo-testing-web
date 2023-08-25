// Define an interface representing a simple person
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

// Create an object that conforms to the Person interface
const person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Function that greets a person
function greet(person: Person): string {
  return `Hello, ${person.firstName} ${person.lastName}! You are ${person.age} years old.`;
}

// Call the function and log the result
const greeting = greet(person);
console.log(greeting);
