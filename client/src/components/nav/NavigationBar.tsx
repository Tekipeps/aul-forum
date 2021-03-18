import { ReactElement, FC } from 'react';
import { Link } from 'react-router-dom';
import ParentResizeListener from '../reusable/ParentResizeListener';
import anchorLogo from '../../assets/images/anchor-logo.png';
import StyledNavBar, { StyledNavLogo, StyledNavRoutes } from './NavigationBar.styled';
import Utility from '../../utils/Utility';

interface RouteButtonParams {
    route: string;
}

const RouteButton: FC<RouteButtonParams> = ({ route }): ReactElement => {
    const routeName = Utility.getBaseURL(route);

    return (
        <ParentResizeListener>
            <div>
                <Link to={`/${route}`}>{routeName}</Link>
            </div>
        </ParentResizeListener>
    );
};

const Routes: FC = (): ReactElement => (
    <StyledNavRoutes>
        <RouteButton route='home/most-recent' />
        <RouteButton route='login' />
        <RouteButton route='register' />
        <RouteButton route='team' />
    </StyledNavRoutes>
);

export const NavBar: FC = (): ReactElement => (
    <StyledNavBar>
        <StyledNavLogo>
            <div>
                <img src={anchorLogo} />
            </div>
            <div>AUL FORUM</div>
        </StyledNavLogo>
        <Routes />
    </StyledNavBar>
);
