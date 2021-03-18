import { ReactElement, FC } from 'react';
import ParentResizeListener from '../../components/reusable/ParentResizeListener';
import { Link, useRouteMatch } from 'react-router-dom';
import searchIcon from '../../assets/svg/search-icon.svg';
import routes from '../../routes/home/home-routes.json';
import styles from './HomeNavigation.module.scss';

interface NavButtonParams {
    name: string;
    url: string;
}

const SearchBar: FC = (): ReactElement => (
    <div className={styles.searchBarContainer}>
        <img src={searchIcon} />
        <input type='text' placeholder='Search' />
    </div>
);

const NavLink: FC<NavButtonParams> = ({ name, url }): ReactElement => {
    const match = useRouteMatch<{ location: string }>('/home/:location');
    const matchUrl = `/${match?.params.location}`;

    return (
        <ParentResizeListener>
            <div className={`${styles.navLink} ${matchUrl === url && styles.isOnFocus}`}>
                <Link to={`/home${url}`}>{name}</Link>
            </div>
        </ParentResizeListener>
    );
};

const PostNavigation: FC = (): ReactElement => {
    return (
        <div id={styles.postNavBar}>
            <div id={styles.postRoutesWrapper}>
                {routes.map(({ name, url }, i) => (
                    <NavLink {...{ name, url }} key={i} />
                ))}
            </div>

            <SearchBar />
        </div>
    );
};

export default PostNavigation;
