import { ReactElement, FC } from 'react';
import viewsLogo from '../../assets/views-logo.webp';
import commentsLogo from '../../assets/comments-logo.jpg';
import styles from './PostsSection.module.scss';

interface PostType {
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

interface PostFooterType {
    views: number;
    comments: number;
}

const PostFooter: FC<PostFooterType> = ({ views, comments }): ReactElement => {
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

const Post: FC<PostType> = ({ data }): ReactElement => {
    const { authorName, timeStamp, content, topic, comments, views, avatarURL } = data;
    const avatar = require(`./dummy-assets/${avatarURL}`).default;

    //converts the newline sequence \n to <br/>
    const contentArray = content.split('\n').map((line) => (
        <>
            {line}
            <br />
        </>
    ));
    
    return (
        <div className={styles.post}>
            <div className={styles.avatarWrapper}>
                <img src={avatar} />
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
