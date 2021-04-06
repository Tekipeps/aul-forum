import { ReactElement, FC } from 'react';
import ParentResizeListener from '../../components/reusable/ParentResizeListener';
import { Link, useRouteMatch } from 'react-router-dom';
import SearchIcon from './assets/SearchIcon.svg';
import routes from '../../routes/home/routes.json';
import StyledNavBar, { StyledNavButtonContainer, StyledSearchBarContainer, StyledNavButton } from './HomeNavigation.styled';

interface NavButtonParams {
    name: string;
    url: string;
}

const SearchBar: FC = (): ReactElement => (
    <StyledSearchBarContainer>
        <input type='text' placeholder='Search' />
        <div className='searchIconWrapper'>
            <SearchIcon />
        </div>
    </StyledSearchBarContainer>
);

const NavButton: FC<NavButtonParams> = ({ name, url }): ReactElement => {
    const match = useRouteMatch<{ location: string }>('/home/:location');
    const matchUrl = `/${match?.params.location}`;

    return (
        <ParentResizeListener>
            <StyledNavButton className={`${matchUrl === url && 'isOnFocus'}`}>
                <Link to={`/home${url}`}>{name}</Link>
            </StyledNavButton>
        </ParentResizeListener>
    );
};

const HomeNavigationBar: FC = (): ReactElement => (
    <StyledNavBar>
        <StyledNavButtonContainer>
            {routes.map(({ name, url }, i) => (
                <NavButton {...{ name, url }} key={i} />
            ))}
        </StyledNavButtonContainer>
        <SearchBar />
    </StyledNavBar>
);

export default HomeNavigationBar;
