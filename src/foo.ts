// Define a variable with a specific type
const message: string = "Hello, TypeScript!";

// Function that takes a string and returns its length
function getLength(input: string): number {
    return input.length;
}

// Call the function and log the result
const messageLength = getLength(message);
console.log(`Length of the message: ${messageLength}`);
