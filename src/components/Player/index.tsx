import { IPlayer } from '@/types/Player';
import styled from 'styled-components';
import Chip from '@/components/Chip';
import { useRecoilValue } from 'recoil';
import { gameState } from '@/store';
import Card from '@/components/Card';

interface PlayerProps {
    playerData: IPlayer;
}

const StyledPlayer = styled.div<{ count: number }>`
    width: 100%;
    height: 100vh;
`;

const Chips = styled.div`
    position: relative;
`;

const Cards = styled.div`
    position: relative;
`;

const Player = ({ playerData: { chips, hand, id } }: PlayerProps) => {
    const { players } = useRecoilValue(gameState);

    return (
        <StyledPlayer count={players.length}>
            <Chips>
                {chips.map((chip, index) => (
                    <Chip key={`${id}_chip_${index}`} chipData={chip} index={index} />
                ))}
            </Chips>
            <Cards>
                {hand.map((card, index) => (
                    <Card key={`${id}_card_${index}`} cardData={card} index={index} />
                ))}
            </Cards>
        </StyledPlayer>
    );
};

export default Player;
