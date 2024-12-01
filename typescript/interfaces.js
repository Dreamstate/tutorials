"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nick = {
    dbID: 2, email: "n@n.com", userId: 1, startTrial: () => { return ""; }, startTrial2: () => { return ""; },
    getCoupon: (name, val) => { return ""; }, role: "admin", githubToken: "asd"
};
nick.email = "asd@asd";
// it is mandatory to implement all the properties of the interface
// you can add more properties
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createStory() {
        return "";
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, videoLength) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.videoLength = videoLength;
    }
}
