import { ReactElement, FC } from 'react';
import viewsLogo from '../../assets/svg/views-logo.svg';
import commentsLogo from '../../assets/svg/comments-logo.svg';
import styles from './PostSection.module.scss';

interface PostParams {
    data: {
        authorName: string;
        avatarURL: string;
        timeStamp: string;
        topic: string;
        content: string;
        views: number;
        comments: number;
    };
}

interface PostFooterParams {
    views: number;
    comments: number;
}

const PostFooter: FC<PostFooterParams> = ({ views, comments }): ReactElement => {
    return (
        <div className={styles.footer}>
            <div className={styles.viewsCount}>
                <img src={viewsLogo} alt='views' />
                <span>{views}</span>
            </div>
            <div className={styles.commentsCount}>
                <img src={commentsLogo} alt='comments' />
                <span>{comments}</span>
            </div>
        </div>
    );
};

const Post: FC<PostParams> = ({ data }): ReactElement => {
    const { authorName, timeStamp, content, topic, comments, views, avatarURL } = data;
    const avatar: string = require(`./dummy-assets/${avatarURL}`).default;

    //converts the newline sequence \n to <br/>
    const contentArray: JSX.Element[] = content.split('\n').map((line) => (
        <>
            {line}
            <br />
        </>
    ));

    return (
        <div className={styles.post}>
            <div className={styles.avatarWrapper}>
                <img src={avatar} alt={authorName} />
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.head}>
                    <div className={styles.author}>{authorName}</div>
                    <div className={styles.timestamp}>{timeStamp}</div>
                </div>
                <div className={styles.topic}>{topic}</div>
                <div className={styles.content}>{contentArray}</div>
                <PostFooter views={views} comments={comments} />
            </div>
        </div>
    );
};
export default Post;
