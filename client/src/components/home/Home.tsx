import React, { ReactElement, FC } from 'react';
import PostsSection from './PostsSection';
//import MembersSection from './MembersSection';
import styled from 'styled-components';

const PostsSectionWrapper = styled.div`
    position: relative;
    width: 100%;
    float: left;
`;

const HomeWrapper = styled.div`
    display: flex;
`;
export const Home: FC = (): ReactElement => (
    <HomeWrapper>
        <PostsSectionWrapper>
            <PostsSection />
        </PostsSectionWrapper>
    </HomeWrapper>
);
