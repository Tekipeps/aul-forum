import React, { ReactElement, FC } from 'react';
import PostsSection from './PostsSection';
//import MembersSection from './MembersSection';
import styled from 'styled-components';

<<<<<<< HEAD
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
=======
export const Home: FC = (): ReactElement => (
    <div>
        <div id='home-content'>
>>>>>>> 05bb5bc4c703e6748fe57e3c28c82cbe4e81f5e0
            <PostsSection />
        </PostsSectionWrapper>
    </HomeWrapper>
);
