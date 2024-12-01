const User = {
    name: "John",
    email: "john@abv.bg",
    age: 30,
    isActive: true,
}

function createUser({ name: string, isPaid: boolean }) { }

let newUser = { name: "nick", isPaid: true, email: "asd@asd" } // bad behavior

createUser(newUser)


function createCourse(): { name: string, price: number } {
    return {
        name: "typescript",
        price: 124
    }
}


// type aliases

type User = {
    readonly _id: string, // readonly for db
    name: string,
    email: string,
    age: number,
    isActive: boolean
    cardDetails?: number // optional with ?
}

function createUser2(user: User): User {
    return user
}

createUser2({ _id: "", name: "", email: "", age: 0, isActive: true })

// combining types

type Admin = {
    role: string
}

type SuperUser = User & Admin & { superPower: string }


export { }