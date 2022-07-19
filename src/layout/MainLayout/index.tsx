import React, { useState } from 'react';
import styled from 'styled-components';
import { HasChildrenNode } from '@/types';
import Container from '@/components/Container';

const StyledLayout = styled.div``;

const MainLayout = ({ children }: HasChildrenNode) => {
    return (
        <StyledLayout>
            <Container>{children}</Container>
        </StyledLayout>
    );
};

export default MainLayout;
