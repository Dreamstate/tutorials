"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "John",
    email: "john@abv.bg",
    age: 30,
    isActive: true,
};
function createUser({ name: string, isPaid: boolean }) { }
let newUser = { name: "nick", isPaid: true, email: "asd@asd" }; // bad behavior
createUser(newUser);
function createCourse() {
    return {
        name: "typescript",
        price: 124
    };
}
function createUser2(user) {
    return user;
}
createUser2({ _id: "", name: "", email: "", age: 0, isActive: true });
