import { IPlayer, Player } from '@/types/Player';
import { ICard, Card } from '@/types/Card';
import { useCallback, useEffect, useRef } from 'react';
import { Nullable } from '@/types';

const useGame = (playerCount: number) => {
    const players = useRef<Nullable<IPlayer[]>>(null);
    const cards = useRef<Nullable<ICard[]>>(null);

    const makePlayers = useCallback(() => {
        players.current = Array(playerCount)
            .fill(null)
            .map(() => new Player());
    }, [playerCount]);

    const makeCards = useCallback(() => {
        switch (playerCount) {
            case 3:
                cards.current = Array(36)
                    .fill(null)
                    .map((_, index) => new Card((index % 12) + 1, Math.floor(index / 12)));
                break;
            case 4:
                cards.current = Array(52)
                    .fill(null)
                    .map((_, index) => new Card((index % 13) + 1, Math.floor(index / 13)));
                break;
            default:
                cards.current = Array(60)
                    .fill(null)
                    .map((_, index) => new Card((index % 15) + 1, Math.floor(index / 15)));
                break;
        }
    }, [playerCount]);

    const shuffleCards = useCallback(() => {
        if (cards.current?.length) {
            const copyList = [...cards.current];
            const shuffled: ICard[] = [];

            while (copyList.length) {
                shuffled.push(...copyList.splice(Math.floor(Math.random() * copyList.length), 1));
            }

            cards.current = shuffled;
        }
    }, []);

    const setPlayersHand = useCallback(() => {
        if (cards.current) {
            const handLength = cards.current.length / playerCount;

            players.current = players.current?.map((player, index) => {
                if (cards.current) {
                    return {
                        ...player,
                        hand: cards.current.slice(index * handLength, index * handLength + handLength),
                    };
                }

                return player;
            });
        }
    }, [playerCount]);

    const getPlayers = useCallback(() => {
        makePlayers();
        makeCards();
        shuffleCards();
        setPlayersHand();

        return players.current;
    }, []);

    return getPlayers;
};

export default useGame;
