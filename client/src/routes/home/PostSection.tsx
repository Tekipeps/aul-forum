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

type routeType = { name: string; description: string } | undefined;

const PostSection: FC<PostSectionParams> = ({ match }): ReactElement => {
    const urlArray: string[] = match.url.split('/');
    const urlHeader: string = urlArray[urlArray.length - 1].replace(/-/g, ' ');
    const route: routeType = routes.find((route) => route.name.toLowerCase() === urlHeader);
    let description: string;
    if (!route) description = '';
    else description = route.description;

    return (
        <>
            <div id={styles.containerHeader}>{description}</div>
            <div className={styles.postContainer}>
                {dummyData.map((data) => (
                    <Post data={data} />
                ))}
            </div>
        </>
    );
};

export default PostSection;
