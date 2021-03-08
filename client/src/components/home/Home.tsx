import React, { ReactElement } from 'react';
import PostsSection from './PostsSection';
import MembersSection from './MembersSection';
import './Home.scss';

export const Home = (): ReactElement => (
    <div>
        <div id='home-content'>
            <PostsSection />
        </div>
        <MembersSection />
    </div>
);
