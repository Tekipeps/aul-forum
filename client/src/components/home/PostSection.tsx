import { ReactElement, FC } from 'react';
import Post from './Post';
import dummyData from './dummy-assets/dummyPostData.json';
import routes from './home-routes.json';

import styles from './PostSection.module.scss';

interface PostSectionParams {
    match: {
        url: string;
    };
}

const PostSection: FC<PostSectionParams> = ({ match }): ReactElement => {

    const urlArray = match.url.split('/');
    const urlHeader = urlArray[urlArray.length - 1].replace(/-/g, ' ');
    const route = routes.find((route) => route.name.toLowerCase() === urlHeader);
    let description: string;
    if (!route) description = '';
    else description = route.description;

    return (
        <>
            <h2 id={styles.containerHeader}>{description}</h2>

            <div className={styles.postContainer}>
                {dummyData.map((data) => (
                    <Post data={data} />
                ))}
            </div>
        </>
    );
};

export default PostSection;
