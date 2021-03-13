import { ReactElement, FC } from 'react';
import PostNavigation from './PostNavigation';
import PostsSection from './PostsSection';
//import MembersSection from './MembersSection';

export const Home: FC = (): ReactElement => (
    <>
        <PostNavigation />
        <PostsSection />
    </>
);
