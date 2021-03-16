import { ReactElement, FC } from 'react';
import Post from './Post';
import dummyData from './dummy-assets/dummyPostData.json';
import styles from './PostSection.module.scss';

interface PostSectionParams {
    match: {
        url: string;
    };
}

const PostSection: FC<PostSectionParams> = ({ match }): ReactElement => (
    <>
        <h2 id={styles.containerHeader}>{match.url}</h2>
        <div className={styles.postContainer}>
            {dummyData.map((data) => (
                <Post data={data} />
            ))}
        </div>
    </>
);

export default PostSection;
