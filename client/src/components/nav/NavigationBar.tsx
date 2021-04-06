import { ReactElement, FC } from 'react';
import NavRoutes from './NavigationRoutes';
import anchorLogo from '../../assets/images/logo2.png';
import { useAppSelector } from '../../state/hooks';
import StyledNavBar, { StyledNavLogo } from './NavigationBar.styled';

const signedInRoutes = ['home', 'profile', 'about'];
const signedOutRoutes = ['home', 'login', 'register', 'about'];

export const NavBar: FC = (): ReactElement => {
    const auth = useAppSelector((state) => state.auth);
    //This should be const state = auth.isLoggedIn ? signedInRoutes : signedOutRoutes;
    //I added the ! so i can work on the profile page
    const state = !auth.isLoggedIn ? signedInRoutes : signedOutRoutes;
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
