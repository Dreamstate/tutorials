interface User {
    readonly dbID: number,
    email: string,
    userId: number,
    googleId?: string
    // methods, both work
    startTrial: () => string
    startTrial2(): string
    getCoupon(couponNema: string, value: number): string
}

// you can expand on the original interface User "reoppening the interface"
interface User {
    githubToken: string
}

// inheritence of interfaces
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const nick: Admin = {
    dbID: 2, email: "n@n.com", userId: 1, startTrial: () => { return "" }, startTrial2: () => { return "" },
    getCoupon: (name: "test", val: 23) => { return "" }, role: "admin", githubToken: "asd"
}

nick.email = "asd@asd"

// further info on interfaces
interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): string
}

// it is mandatory to implement all the properties of the interface
// you can add more properties

class Instagram implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { }

    createStory(): string {
        return ""
    }
}

class Youtube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public videoLength: number
    ) { }
}

export { }