import { ReactElement, FC } from 'react';
import PostsSection from './PostsSection';
//import MembersSection from './MembersSection';
//import styled from 'styled-components';
/*
const div = styled.div`
    position: relative;
    width: 100%;
    float: left;
`;

const div = styled.div`
    display: flex;
`;*/
export const Home: FC = (): ReactElement => (
    <div>
        <div>
            <PostsSection />
        </div>
    </div>
);
