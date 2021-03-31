import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import ParentResizeListener from '../reusable/ParentResizeListener';
import { StyledNavRoutes } from './NavigationBar.styled';
import { capFirstLetter } from '../../utils/Utility';


interface RouteButtonParams {
    route: string;
}

const RouteButton: FC<RouteButtonParams> = ({ route }): ReactElement => (
    <ParentResizeListener>
        <div id='route-btn'>
            <Link to={`/${route}`}>{capFirstLetter(route)}</Link>
        </div>
    </ParentResizeListener>
);

interface NavRoutesParams {
    routes: string[];
}

const NavRoutes: FC<NavRoutesParams> = ({ routes }): ReactElement => (
    <StyledNavRoutes>
        {routes.map((route: string, key: number) => (
            <RouteButton {...{ route, key }} />
        ))}
    </StyledNavRoutes>
);

export default NavRoutes;
