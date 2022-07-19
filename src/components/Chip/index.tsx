import { Chip as ChipType } from '@/types/Chip';
import styled from 'styled-components';

interface ChipProps {
    chipData: ChipType;
    index: number;
}

const StyledChip = styled.div<ChipProps>`
    position: absolute;
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 5px 10px 10px 2px rgba(0, 0, 0, 0.1);
    border: 3px solid #0d0d0d;

    background-color: ${({ chipData }) => {
        switch (chipData) {
            case 0:
                return '#decc72';
            case 1:
                return '#69c668';
            default:
                return '#e85454';
        }
    }};

    left: ${({ index }) => index * 30 + 'px'};
`;

const Chip = (props: ChipProps) => {
    return <StyledChip {...props} />;
};

export default Chip;
