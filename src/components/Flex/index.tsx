import styled, { css } from 'styled-components';
import { HasChildrenNode } from '@/types';

export interface FlexProps {
    direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse' | 'inherit' | 'initial';
    justify?: 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
    align?: 'center' | 'baseline' | 'flex-start' | 'flex-end';
    gap?: number;
}

const StyledFlex = styled.div<FlexProps>`
    display: flex;
    ${({ direction, justify, align, gap }) => css`
        direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        gap: ${gap && gap + 'px'};
    `}
`;

const Flex = ({ children, ...rest }: HasChildrenNode & FlexProps) => {
    return <StyledFlex {...rest}>{children}</StyledFlex>;
};

export default Flex;
