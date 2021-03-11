import { ReactElement, FC } from 'react';
import PostFooter from './PostFooter';
import styles from './PostsSection.module.scss';

const PostsSection: FC = (): ReactElement => (
    <div className={styles.container}>
        <div className={styles.post}>
            <div className={styles.head}>
                <div className={styles.author}>Cindy Ebirim</div>
                <div className={styles.timestamp}>25 minutes ago</div>
            </div>
            <div className={styles.topic}>Usage of phones</div>
            <div className={styles.content}>
                We the students of Anchor University have pleaded with our superiors to allow the usage of phones. What
                else can we do?Multiple letters have been written, they need to realize that we need our smart phones to
                keep up with our acadamics. Goddamit.
            </div>
            <PostFooter views={37} comments={17} />
        </div>
        <div className={styles.post}>
            <div className={styles.head}>
                <div className={styles.author}>DaGhost</div>
                <div className={styles.timestamp}>3 hours ago</div>
            </div>
            <div className={styles.topic}>
                Anchor caf is dissappointing...
                <br />
                Honestly!!
            </div>
            <div className={styles.content}>
                Anyone else thinks anchor caf needs to upgrade their food quality? most times its below standard and
                just dissapppointing, the staffs are sluggish to attend to you most of the times... does anyone else
                feel the same way or is it just me?😔😔
            </div>
            <PostFooter views={51} comments={57} />
        </div>
        <div className={styles.post}>
            <div className={styles.head}>
                <div className={styles.author}>Martins Nonso</div>
                <div className={styles.timestamp}>1 day ago</div>
            </div>
            <div className={styles.topic}>
                Hello, this semester is going by so fast, here are some tips to help new students struggling
            </div>
            <div className={styles.content}>
                <br />
                Be confident
                <br />
                Study hard, its never enough, study harder
                <br />
                try to be social, nobody likes an antisocial creep
                <br />
                do the right things at the right time Have a nice day
            </div>
            <PostFooter views={76} comments={9} />
        </div>
        <div className={styles.post}>
            <div className={styles.head}>
                <div className={styles.author}>Chidera Samson</div>
                <div className={styles.timestamp}>4 days ago</div>
            </div>
            <div className={styles.topic}>hello everyone</div>
            <div className={styles.content}>
                The 1st ca tests just got concluded, I hope we all did well? narate your experiences with this 1st ca,
                was it excellent or just there... or you... you know...banged?feel free to discuss
            </div>
            <PostFooter views={390} comments={482} />
        </div>
    </div>
);

export default PostsSection;
