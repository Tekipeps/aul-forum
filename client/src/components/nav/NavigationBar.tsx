import { ReactElement, FC } from 'react';
import NavRoutes from './NavigationRoutes';
import anchorLogo from '../../assets/images/anchor-logo.png';
import { useAppSelector } from '../../state/hooks';
import StyledNavBar, { StyledNavLogo } from './NavigationBar.styled';

const signedInRoutes = ['home', 'profile', 'about'];
const signedOutRoutes = ['home', 'login', 'register', 'about'];

export const NavBar: FC = (): ReactElement => {
    const auth = useAppSelector((state) => state.auth);
    const state = auth.isLoggedIn ? signedInRoutes : signedOutRoutes;
    console.log(state);
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
