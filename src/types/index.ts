import { IPlayer } from '@/types/Player';
import { ReactNode } from 'react';

export type Nullable<T> = T | null | undefined;
export type EmptyObject = {
    [key: string]: unknown;
};

export interface GameState {
    isStart: boolean;
    players: IPlayer[];
}

export interface HasChildrenNode {
    children: ReactNode | string;
}
