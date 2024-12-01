"use strict";
const score = [];
const names = [];
// probem example - restrictive, only 2 types
function identity1(val) {
    return val;
}
// problem example 2 - any type which doesnt help
function identity2(val) {
    return val;
}
// solution with generics - logs the type of the input and returns that type
// you can use T instead of Type or whatever you want
function identity3(val) {
    return val;
}
function identity4(val) {
    return val;
}
// generics with arrays
function identity5(val) {
    // do some db operations
    const myIdx = 3;
    return val[myIdx];
}
// generic arrow function
const getMoreSearchProducts = (val) => {
    // do some db operations
    const myIdx = 3;
    return val[myIdx];
};
function anotherIdentity(val1, val2) {
    return { val1, val2 };
}
anotherIdentity(1, { connection: "asd", username: "asd", password: "asd" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(item) {
        this.cart.push(item);
    }
}
