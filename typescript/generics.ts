const score: Array<number> = []
const names: Array<string> = []

// probem example - restrictive, only 2 types
function identity1(val: boolean | number): boolean | number {
    return val
}

// problem example 2 - any type which doesnt help
function identity2(val: any): any {
    return val
}

// solution with generics - logs the type of the input and returns that type
// you can use T instead of Type or whatever you want

function identity3<Type>(val: Type): Type {
    return val
}

// generics with custom types
type Bottle = {
    liquid: string
}

function identity4<Bottle>(val: Bottle): Bottle {
    return val
}

// generics with arrays

function identity5<Type>(val: Type[]): Type {
    // do some db operations
    const myIdx = 3
    return val[myIdx]
}

// generic arrow function
const getMoreSearchProducts = <T,>(val: T[]): T => { // T, is to mention its not a TAG, but a generic, usefull for react
    // do some db operations
    const myIdx = 3
    return val[myIdx]
}

// generic type parameters in generic constraints

interface Database {
    connection: string,
    username: string,
    password: string
}
function anotherIdentity<T, U extends Database>(val1: T, val2: U): object {
    return { val1, val2 }
}

anotherIdentity(1, { connection: "asd", username: "asd", password: "asd" })

// generic classes

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(item: T): void {
        this.cart.push(item)
    }
}