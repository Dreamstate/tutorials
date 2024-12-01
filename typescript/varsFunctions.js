"use strict";
// Always check if type is inferred correctly and not Any
Object.defineProperty(exports, "__esModule", { value: true });
// strings
let greetings = "Hello Nick";
let greetings2 = "Hello Nick";
greetings.toLowerCase();
console.log(greetings2);
// numbers
let numTyped = 10;
let number = 10;
number.toFixed();
console.log(numTyped);
// boolean
let isLogged = true;
let isLogged2 = true;
isLogged2.valueOf();
console.log(isLogged);
// any - it just turns off type checking
// where you shouldn't use it
// you should use noImplicitAny to flag any implicit any as an error
let hero;
function getHero() {
    return "thor";
}
hero = getHero();
// strict values
let planceSeatAllotment; // can only be these 3 values
// functions
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("hello");
function signUpUser(username, email, password) {
    return true;
}
signUpUser("nick", "asd@asd", "123");
// default values in params and arrow functions
let loginUser = (name, email, isPaid = false) => {
    return false;
};
loginUser("n", "n@n.com");
// function union
function getValue(myVal) {
    if (typeof myVal === "string") {
        return myVal.length;
    }
    if (myVal > 0) {
        return myVal;
    }
    return false;
}
// array, variables in strings
const heroes = ["thor", "ironman", "spiderman"];
heroes.map((hero) => {
    return `hero is ${hero}`;
});
const heroes2 = []; // this creates an array of NEVER - WRONG!!!
// both are correct ways to do it
const heroes3 = []; // this creates an array of strings
const heroes4 = []; // this creates an array of numbers
// array of arrays with numbers
const MLModels = [[1, 2], [3, 4], [5, 6]];
heroes3.push("thor");
heroes4.push(4);
// readonly arrays
const readOnlyHeroes = ["thor", "ironman", "spiderman"];
// union arrays
let mixedArray = ["thor", 1, "ironman", 2];
// tuples
let user = ["nick", 30]; // fixed length and fixed types and fixed order of types
// void - never retuns anything
function logMe() {
    console.log("log me");
}
logMe();
// never - intentianlly break function if it throws an error
function logMe2() {
    throw new Error("log me");
}
logMe2();
// enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = 2] = "USER";
    Role[Role["SUPERUSER"] = 3] = "SUPERUSER";
})(Role || (Role = {}));
const userRole = Role.USER;
