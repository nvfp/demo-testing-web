var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
function greet(person) {
    return "Hello, ".concat(person.firstName, " ").concat(person.lastName, "! You are ").concat(person.age, " years old.");
}
var greeting = greet(person);
console.log(greeting);
