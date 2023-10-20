// const now = new Date();

// console.log(`Today ${now.getFullYear()} year`);

// console.log("nodevon v roboti...")

// const users = require("./users")

// console.log(users)

// const { animals } = require("./users");

// console.log(animals)

// const { getCurrentMonth } = require("./dateFunctions");
// const currentMonth = getCurrentMonth();

// console.log(currentMonth);

// const currentMonth = require("./dateFunctions").getCurrentMonth();
// console.log(currentMonth);

import users from "./users.js";
import getCurrentMonth from "./dateFunctions/getCurrentMonth.js";
// import { animals } from "./users.js";

// console.log(animals);

const currentMonth = getCurrentMonth();
console.log(currentMonth);

console.log(users);