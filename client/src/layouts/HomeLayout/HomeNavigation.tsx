import { ReactElement, FC } from 'react';
import ParentResizeListener from '../../components/reusable/ParentResizeListener';
import { Link, useRouteMatch } from 'react-router-dom';
import SearchIcon from './assets/SearchIcon.svg';
import routes from '../../routes/home/home-routes.json';
import StyledNavBar, { StyledRoutesWrapper, StyledSearchBarContainer, StyledNavLink } from './HomeNavigation.styled';

interface NavButtonParams {
    name: string;
    url: string;
}

const SearchBar: FC = (): ReactElement => (
    <StyledSearchBarContainer>
        <div className='searchIconWrapper'>
            <SearchIcon />
        </div>
        <input type='text' placeholder='Search' />
    </StyledSearchBarContainer>
);

const NavLink: FC<NavButtonParams> = ({ name, url }): ReactElement => {
    const match = useRouteMatch<{ location: string }>('/home/:location');
    const matchUrl = `/${match?.params.location}`;

    return (
        <ParentResizeListener>
            <StyledNavLink className={`${matchUrl === url && 'isOnFocus'}`}>
                <Link to={`/home${url}`}>{name}</Link>
            </StyledNavLink>
        </ParentResizeListener>
    );
};

const PostNavigation: FC = (): ReactElement => {
    return (
        <StyledNavBar>
            <StyledRoutesWrapper>
                {routes.map(({ name, url }, i) => (
                    <NavLink {...{ name, url }} key={i} />
                ))}
            </StyledRoutesWrapper>

            <SearchBar />
        </StyledNavBar>
    );
};

export default PostNavigation;
