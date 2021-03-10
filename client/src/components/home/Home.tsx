import React, { ReactElement, FC } from 'react';
import PostsSection from './PostsSection';
import MembersSection from './MembersSection';
import './Home.scss';

export const Home: FC = (): ReactElement => (
    <div>
        <div id='home-content'>
            <PostsSection />
        </div>
        <MembersSection />
    </div>
);
