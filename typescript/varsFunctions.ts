// Always check if type is inferred correctly and not Any

// strings
let greetings: string = "Hello Nick"
let greetings2 = "Hello Nick"
greetings.toLowerCase()
console.log(greetings2)

// numbers
let numTyped: number = 10
let number = 10
number.toFixed()
console.log(numTyped);

// boolean
let isLogged: boolean = true
let isLogged2 = true
isLogged2.valueOf()
console.log(isLogged);

// any - it just turns off type checking
// where you shouldn't use it
// you should use noImplicitAny to flag any implicit any as an error
let hero

function getHero() {
    return "thor"
}

hero = getHero()

// strict values
let planceSeatAllotment: "aisle" | "middle" | "window" // can only be these 3 values

// functions

function addTwo(num: number): number {
    return num + 2
}

addTwo(5)

function getUpper(val: string): string {
    return val.toUpperCase()
}

getUpper("hello")

function signUpUser(username: string, email: string, password: string): boolean {
    return true
}

signUpUser("nick", "asd@asd", "123")

// default values in params and arrow functions
let loginUser = (name: string, email: string, isPaid: boolean = false): boolean => {
    return false
}

loginUser("n", "n@n.com")

// function union
function getValue(myVal: number | string): number | boolean {
    if (typeof myVal === "string") {
        return myVal.length
    }

    if (myVal > 0) {
        return myVal
    }

    return false
}


// array, variables in strings

const heroes = ["thor", "ironman", "spiderman"]

heroes.map((hero): string => {
    return `hero is ${hero}`
})

const heroes2 = [] // this creates an array of NEVER - WRONG!!!

// both are correct ways to do it
const heroes3: string[] = [] // this creates an array of strings
const heroes4: Array<number> = [] // this creates an array of numbers

// array of arrays with numbers
const MLModels: number[][] = [[1, 2], [3, 4], [5, 6]]
heroes3.push("thor")
heroes4.push(4)

// readonly arrays
const readOnlyHeroes: ReadonlyArray<string> = ["thor", "ironman", "spiderman"]

// union arrays
let mixedArray: (string | number)[] = ["thor", 1, "ironman", 2]

// tuples
let user: [string, number] = ["nick", 30] // fixed length and fixed types and fixed order of types

// void - never retuns anything

function logMe(): void {
    console.log("log me")
}
logMe()

// never - intentianlly break function if it throws an error
function logMe2(): never {
    throw new Error("log me")
}
logMe2()

// enums
enum Role {
    ADMIN = 1, // if you want to start from something different than 0
    USER,
    SUPERUSER
}

const userRole = Role.USER

export { }