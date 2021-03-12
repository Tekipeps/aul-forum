import { ReactElement, FC } from 'react';
import PostsSection from './PostsSection';

export const Home: FC = (): ReactElement => (
    <div>
        <div>
            <PostsSection />
        </div>
    </div>
);
