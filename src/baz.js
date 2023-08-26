var numbers = [1, 2, 3, 4, 5];
function doubleNumbers(input) {
    return input.map(function (num) { return num * 2; });
}
var doubled = doubleNumbers(numbers);
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubled);
