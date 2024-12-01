"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User123 {
    constructor(email, name, userID = 1) {
        this.email = email;
        this.name = name;
        this.userID = userID;
        // protected - can be accessed by child classes
        this._courseCount = 1;
        this.city = "NYC";
    }
    // private method
    deleteToken() {
        console.log("Token deleted");
    }
    // getters
    get getAppltEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // setter - NOTE no return type, not even VOID
    set setCourseCount(courseCount) {
        if (courseCount < 1) {
            throw new Error("Invalid course count");
        }
        this._courseCount = courseCount;
    }
}
class SubUse extends User123 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 2;
    }
}
const nick = new User123("n@n.com", "nick");
// abstract classes
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // compleceted stuff
        return 0;
    }
}
// you cannot create an instance of an abstract class
// const nick2 = new TakePhoto("portrait", "b&w")
// used only as a template for other classes
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    takePhoto() {
        console.log("Photo taken");
    }
}
const nick2 = new Instagram("portrait", "b&w", 3);
