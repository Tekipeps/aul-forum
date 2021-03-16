import { ReactElement, FC, useState, MouseEventHandler } from 'react';
import { ParentResizeListener } from '../reusable/ResizeListener';
import { Link } from 'react-router-dom';

import styles from './PostNavigation.module.scss';

interface NavButtonParams {
    routeName: string;
    isOnFocus: boolean;
    handleClick: MouseEventHandler;
    baseURL: string;
}

interface PostNavigationParams {
    baseURL: string;
}

const SearchBar: FC = (): ReactElement => (
    <div className={styles.searchBar}>
        <input type='text' placeholder='Search' />
    </div>
);

const NavButton: FC<NavButtonParams> = ({ routeName, handleClick, isOnFocus, baseURL }): ReactElement | null => {
    const getClassName = (isOnFocus: boolean) => {
        if (isOnFocus) return `${styles.postRoute} ${styles.isOnFocus}`;
        else return styles.postRoute;
    };

    const getRoute = (url: string, route: string): string => {
        return `${url}/${route.replace(/\s+/g, '-').toLowerCase()}`;
    };

    return (
        <ParentResizeListener>
            <div className={getClassName(isOnFocus)} onClick={handleClick}>
                <Link to={getRoute(baseURL, routeName)}>{routeName}</Link>
            </div>
        </ParentResizeListener>
    );
};

const PostNavigation: FC<PostNavigationParams> = ({ baseURL }): ReactElement => {
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
                        baseURL={baseURL}
                    />
                ))}
            </div>
            <SearchBar />
        </div>
    );
};

export default PostNavigation;
