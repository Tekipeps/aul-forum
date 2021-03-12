import { ReactElement, FC } from 'react';
import Post from './Post';
import dummyData from './dummy-assets/dummyPostData.json';
import styles from './PostsSection.module.scss';

const PostsSection: FC = (): ReactElement => (
    <div className={styles.container}>
        {dummyData.map((data) => {
            return <Post data={data} />;
        })}
    </div>
);

export default PostsSection;
