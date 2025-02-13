import Character from "./Character";

export class Magician extends Character {
    constructor(distance, stoned) {
        super ("Magician", 100);
        this.distance = distance;
        this._stoned = stoned;
    }
}

export class Daemon extends Character {
    constructor(distance, stoned) {
        super ("Daemon", 80);
        this.distance = distance;
        this._stoned = stoned;
    }
}

