import { ICard } from '@/types/Card';
import { Chip } from '@/types/Chip';
import { randomUUID } from 'crypto';

export interface IPlayer {
    hand: ICard[];
    chips: Chip[];
    id: string;
}

export class Player implements IPlayer {
    hand: ICard[] = [];
    chips: Chip[];
    id;

    constructor() {
        this.id = window.crypto?.randomUUID();
        this.chips = Array(12)
            .fill(null)
            .map((_, index) => index % 4)
            .sort((a, b) => b - a);
    }
}
