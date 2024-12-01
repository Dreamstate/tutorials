// typeof array, null etc is object

function detectType(val: number | string | number[]) {
    if (typeof val === 'number') {
        return 'number';
    } else if (typeof val === 'string') {
        return 'string';
    }
    return 'number[]';

}

function provideId(id: string | null) {
    if (!id) {
        return 'no id provided';
    }
    return `id: ${id}`;
}

// doesn't cover empty string ""
function printAll(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}

// using "in" operator

interface User {
    name: string
    email: string
}

interface Admin {
    name: string
    email: string
    role: string
}

function isAdmin(user: User | Admin) {
    if ("role" in user) {
        return user.role;
    }
    return 'user';
}

// instanceof

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}
// predicate functions

type Fish = { swim: () => void }
type Bird = { fly: () => void }

//return type casted instead of boolean
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish food"
    } else {
        pet
        return "bird food"
    }
}

// discriminated unions
// A common pattern in functional programming is to create a discriminated union type by
// adding a literal type property to each type that uses a common property to distinguish between them.
interface Circle {
    kind: "circle"
    radius: number
}

interface Square {
    kind: "square"
    sideLength: number
}

interface Rectangle {
    kind: "rectangle"
    width: number
    height: number
}

type Shape = Circle | Square | Rectangle

// exhaustiveness checking - future proofing
function getTrueShape(s: Shape) {
    switch (s.kind) {
        case "circle":
            return Math.PI * s.radius ** 2;
        case "square":
            return s.sideLength ** 2;
        case "rectangle":
            return s.width * s.height;
        // the never type checks that all cases are covered
        default:
            const defaultforshape: never = s;
            return defaultforshape;
    }
}
