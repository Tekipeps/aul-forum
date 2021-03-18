import React from 'react';
import { Link } from 'react-router-dom';
import StyledHomeNav, { StyledNavLinks, StyledSearchBar } from './HomeNav.styled';
import { useRouteMatch } from 'react-router-dom';
import searchIcon from '../../assets/svg/search-icon.svg';

interface NavLinkType {
    url: string;
    name: string;
}
const links: NavLinkType[] = [
    {
        url: '/most-recent',
        name: 'Most recent'
    },
    {
        url: '/trending',
        name: 'Trending'
    },
    {
        url: '/most-popular',
        name: 'Most popular'
    },
    {
        url: '/followed-posts',
        name: 'Followed posts'
    },
    {
        url: '/my-posts',
        name: 'My posts'
    },
    {
        url: '/my-contributions',
        name: 'My contributions'
    }
];

const SearchBar: React.FC = (): JSX.Element => (
    <StyledSearchBar>
        <img src={searchIcon} />
        <input type='text' placeholder='Search' />
    </StyledSearchBar>
);

const NavLink: React.FC<NavLinkType> = ({ url, name }): JSX.Element => {
    const match = useRouteMatch<{ location: string }>('/home/:location');
    const matchUrl = `/${match?.params.location}`;
    return (
        <Link className={`home-nav-link ${matchUrl === url && 'isOnFocus'}`} to={`/home${url}`}>
            {name}
        </Link>
    );
};

const HomeNav: React.FC = (): JSX.Element => {
    return (
        <StyledHomeNav>
            <StyledNavLinks>
                {links.map((link, i) => (
                    <NavLink {...link} key={i} />
                ))}
            </StyledNavLinks>
            <SearchBar />
        </StyledHomeNav>
    );
};

export default HomeNav;
