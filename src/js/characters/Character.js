export default class Character {
    constructor(type, attack = 100) {
        this.type = type;
        this._attack = attack;
        this.distance;
        this._stoned = false;
    }

    get attack() {
        const damage = 10 * (this.distance - 1);
        let result = this._attack;

        if (damage > result) {
            return 0;
        }
        result -= damage;

        if (this._stoned) {
            return result - Math.log2(this.distance) * 5;
        }

        return result;
    }
    set attack(value) {
        this._attack = value;
    }

    get stoned() {
        return this._stoned;
    }
    set stoned(value) {
        this._stoned = Boolean(value);
    }

    hit(distance, stoned) {
        this.distance = distance;
        this.stoned = stoned;
        return this.attack;
    }
}