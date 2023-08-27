// // main.js
// import { greet } from "../dist/script"; // Use relative path

// greet(); // Calls the greet function from myModule


// didnt work
// import { abc } from "./foo";
// console.log(abc)



// USING jsconfig.json. didnt work too
// import { abc } from "src/foo";
// console.log(abc)


import * as  F from "./foo";
console.log(F.abc)