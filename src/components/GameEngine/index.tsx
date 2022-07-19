import { useRecoilValue } from 'recoil';
import { gameState } from '@/store';
import Player from '@/components/Player';
import Flex from '@/components/Flex';

const GameEngine = () => {
    const { players } = useRecoilValue(gameState);

    return (
        <>
            <Flex>
                {players.map(player => (
                    <Player key={player.id} playerData={player} />
                ))}
            </Flex>
        </>
    );
};

export default GameEngine;
