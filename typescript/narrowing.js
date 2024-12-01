"use strict";
// typeof array, null etc is object
function detectType(val) {
    if (typeof val === 'number') {
        return 'number';
    }
    else if (typeof val === 'string') {
        return 'string';
    }
    return 'number[]';
}
function provideId(id) {
    if (!id) {
        return 'no id provided';
    }
    return `id: ${id}`;
}
// doesn't cover empty string ""
function printAll(strs) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdmin(user) {
    if ("role" in user) {
        return user.role;
    }
    return 'user';
}
// instanceof
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
//return type casted instead of boolean
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
// exhaustiveness checking - future proofing
function getTrueShape(s) {
    switch (s.kind) {
        case "circle":
            return Math.PI * s.radius ** 2;
        case "square":
            return s.sideLength ** 2;
        case "rectangle":
            return s.width * s.height;
        // the never type checks that all cases are covered
        default:
            const defaultforshape = s;
            return defaultforshape;
    }
}
