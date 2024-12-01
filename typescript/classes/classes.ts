class User123 {
    // protected - can be accessed by child classes
    protected _courseCount = 1

    readonly city: string = "NYC"
    constructor(
        public email: string,
        public name: string,
        private userID: number = 1
    ) {
    }

    // private method
    private deleteToken() {
        console.log("Token deleted")
    }

    // getters
    get getAppltEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    // setter - NOTE no return type, not even VOID
    set setCourseCount(courseCount: number) {
        if (courseCount < 1) {
            throw new Error("Invalid course count")
        }
        this._courseCount = courseCount
    }
}

class SubUse extends User123 {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 2
    }
}
const nick = new User123("n@n.com", "nick")

// abstract classes

abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    // abstract method doesn't specify how you use it, you just need to use it
    abstract takePhoto(): void

    getReelTime(): number {
        // compleceted stuff
        return 0
    }
}
// you cannot create an instance of an abstract class
// const nick2 = new TakePhoto("portrait", "b&w")
// used only as a template for other classes

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    takePhoto(): void {
        console.log("Photo taken")
    }
}

const nick2 = new Instagram("portrait", "b&w", 3)
export { }