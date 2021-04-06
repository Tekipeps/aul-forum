import { ReactElement, FC } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import ParentResizeListener from '../reusable/ParentResizeListener';
import anchorLogo from '../../assets/images/trans-logo.png';
import StyledNavBar, { StyledNavLogo, StyledNavRoutes } from './NavigationBar.styled';
import Utility from '../../utils/Utility';
=======
import NavRoutes from './NavigationRoutes';
import anchorLogo from '../../assets/images/anchor-logo.png';
import { useAppSelector } from '../../state/hooks';
import StyledNavBar, { StyledNavLogo } from './NavigationBar.styled';
>>>>>>> f10a833114a1ac04bed44820490ab83df893b41e

const signedInRoutes = ['home', 'profile', 'about'];
const signedOutRoutes = ['home', 'login', 'register', 'about'];

export const NavBar: FC = (): ReactElement => {
    const auth = useAppSelector((state) => state.auth);
    const state = auth.isLoggedIn ? signedInRoutes : signedOutRoutes;
    return (
        <StyledNavBar>
            <StyledNavLogo>
                <div id='logo-image-wrapper'>
                    <img src={anchorLogo} />
                </div>
                <div id='logo-text'>AUL FORUM</div>
            </StyledNavLogo>
            <NavRoutes routes={state} />
        </StyledNavBar>
    );
};
