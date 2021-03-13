import { ReactElement, FC, useState, MouseEventHandler } from 'react';
import styles from './PostNavigation.module.scss';

interface NavButtonType {
    routeName: string;
    isOnFocus: boolean;
    handleClick: MouseEventHandler;
}

const SearchBar: FC = (): ReactElement => {
    return (
        <div className={styles.searchBar}>
            <input type='text' placeholder='Search' />
        </div>
    );
};

const NavButton: FC<NavButtonType> = ({ routeName, handleClick, isOnFocus }): ReactElement => {
    const getClassName = (isOnFocus: boolean) => {
        if (isOnFocus) return `${styles.navButton} ${styles.isOnFocus}`;
        else return styles.navButton;
    };

    return (
        <div className={getClassName(isOnFocus)}>
            <a onClick={handleClick}>{routeName}</a>
        </div>
    );
};

const PostNav: FC = (): ReactElement => {
    const routes = ['Most recent', 'Trending', 'Most popular', 'Followed posts', 'My posts', 'My contributions'];
    const [currentRoute, changeCurrentRoute] = useState('Most recent');
    return (
        <div id={styles.postNavBar}>
            <div>
                {routes.map((route) => (
                    <NavButton
                        routeName={route}
                        handleClick={() => changeCurrentRoute(route)}
                        isOnFocus={route === currentRoute}
                    />
                ))}
                <SearchBar />
            </div>
        </div>
    );
};

export default PostNav;
