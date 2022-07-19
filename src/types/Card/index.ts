export enum CardColor {
    RED,
    GREEN,
    YELLOW,
    BLUE,
}

export interface ICard {
    number: number;
    color: CardColor;
}

export class Card implements ICard {
    number;
    color;

    constructor(number: number, color: CardColor) {
        this.number = number;
        this.color = color;
    }

    toString() {
        return `${CardColor[this.color]} ${this.number}`;
    }

    valueOf() {
        if (this.number === 2) {
            return Number.MAX_SAFE_INTEGER - this.color;
        } else if (this.number === 1) {
            return Number.MAX_SAFE_INTEGER - 1 - this.color;
        } else {
            return this.number - this.color;
        }
    }
}
