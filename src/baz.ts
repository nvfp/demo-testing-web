// Define an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Function that doubles each number in the array
function doubleNumbers(input: number[]): number[] {
    return input.map(num => num * 2);
}

// Call the function and log the result
const doubled = doubleNumbers(numbers);
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubled);
