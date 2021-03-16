import { ReactElement, FC, useState, MouseEventHandler } from 'react';
import { ParentResizeListener } from '../reusable/ResizeListener';
import { Link } from 'react-router-dom';
import routes from './home-routes.json';
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
    const [currentRoute, changeCurrentRoute] = useState<string>('Most recent');
    return (
        <div id={styles.postNavBar}>
            <div id={styles.postRoutesWrapper}>
                {routes.map(({ name }) => (
                    <NavButton
                        routeName={name}
                        handleClick={() => changeCurrentRoute(name)}
                        isOnFocus={name === currentRoute}
                        baseURL={baseURL}
                    />
                ))}

            </div>
            <SearchBar />
        </div>
    );
};

export default PostNavigation;
