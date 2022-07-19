import { ICard } from '@/types/Card';
import styled from 'styled-components';

interface CardProps {
    cardData: ICard;
    index: number;
}

const StyledCard = styled.div`
    display: inline-block;
`;

const Card = ({ cardData, index }: CardProps) => {
    return <StyledCard>{cardData.number}</StyledCard>;
};

export default Card;
