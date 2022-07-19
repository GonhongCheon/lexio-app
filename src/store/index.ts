import { atom, selector, selectorFamily } from 'recoil';
import { GameState } from '@/types';
import { IPlayer } from '@/types/Player';
import LocalStorage from '@/middleware/localStorage';

const storage = new LocalStorage('');

export const gameState = atom<GameState>({
    key: 'game',
    default: storage.get('game') || {
        isStart: false,
        players: [],
    },
});

export const gameStartQuery = selector<boolean | GameState>({
    key: 'isGameStart',
    get: ({ get }) => get(gameState).isStart,
    set: ({ set, get }, newValue) => {
        storage.set('game', { ...get(gameState), isStart: newValue });
        set(gameState, { ...get(gameState), isStart: newValue } as GameState);
    },
});

export const playersQuery = selector<IPlayer[]>({
    key: 'players',
    get: ({ get }) => get(gameState).players,
    set: ({ set, get }, newValue) => {
        storage.set('game', { ...get(gameState), players: newValue });
        set(gameState, { ...get(gameState), players: newValue } as GameState);
    },
});

export const playerQuery = selectorFamily<IPlayer, number>({
    key: 'player',
    get:
        index =>
        ({ get }) =>
            get(gameState).players[index],
});
