import styled from 'styled-components';
import { HasChildrenNode } from '@/types';

const StyledContainer = styled.div`
    position: relative;
    min-height: 100vh;

    //@media (min-width: 421px) {
    //}
    //
    //@media (min-width: 1025px) {
    //    margin: 0 calc((100% - 1024px) / 2);
    //}
`;

const Container = ({ children }: HasChildrenNode) => {
    return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
