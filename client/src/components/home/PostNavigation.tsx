import { ReactElement, FC, useState, MouseEventHandler } from 'react';
import { ParentResizeListener } from '../reusable/ResizeListener';

import styles from './PostNavigation.module.scss';

interface NavButtonType {
    routeName: string;
    isOnFocus: boolean;
    handleClick: MouseEventHandler;
}

const SearchBar: FC = (): ReactElement => (
    <div className={styles.searchBar}>
        <input type='text' placeholder='Search' />
    </div>
);

const NavButton: FC<NavButtonType> = ({ routeName, handleClick, isOnFocus }): ReactElement | null => {
    const getClassName = (isOnFocus: boolean) => {
        if (isOnFocus) return `${styles.postRoute} ${styles.isOnFocus}`;
        else return styles.postRoute;
    };

    return (
        <ParentResizeListener>
            <div className={getClassName(isOnFocus)}>
                <a onClick={handleClick}>{routeName}</a>
            </div>
        </ParentResizeListener>

    );
};

const PostNav: FC = (): ReactElement => {
    const routes = ['Most recent', 'Trending', 'Most popular', 'Followed posts', 'My posts', 'My contributions'];
    const [currentRoute, changeCurrentRoute] = useState<string>('Most recent');
    return (
        <div id={styles.postNavBar}>
            <div id={styles.postRoutesWrapper}>
                {routes.map((route) => (
                    <NavButton
                        routeName={route}
                        handleClick={() => changeCurrentRoute(route)}
                        isOnFocus={route === currentRoute}
                    />
                ))}

            </div>
            <SearchBar />
        </div>
    );
};

export default PostNav;
