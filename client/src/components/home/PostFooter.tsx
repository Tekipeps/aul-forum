import React, { ReactElement, FC } from 'react';
import styles from './PostsSection.module.scss';
import viewsLogo from '../../assets/views-logo.webp';
import commentsLogo from '../../assets/comments-logo.jpg';

interface FooterProps {
    views: number;
    comments: number;
}


const PostFooter: FC<FooterProps> = ({ views, comments }): ReactElement => {
    return (
        <div className={styles.footer}>
            <div className={styles.viewsCount}>
                <img src={viewsLogo} alt='views' />
                <span>{views}</span>
            </div>
            <div className={styles.commentsCount}>
                <img src={commentsLogo} alt='views' />
                <span>{comments}</span>
            </div>
        </div>
    );
};

export default PostFooter;

