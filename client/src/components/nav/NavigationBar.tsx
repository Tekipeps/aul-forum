import { ReactElement, FC } from 'react';
import NavRoutes from './NavigationRoutes';
import ThemeToggler from './ThemeToggler';
import anchorLogo from '../../assets/images/logo2.png';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import StyledNavBar, { StyledNavLogo } from './NavigationBar.styled';
import { logout } from 'src/state/auth/actions';

const signedInRoutes = ['home', 'profile', 'about', 'users'];
const signedOutRoutes = ['home', 'login', 'register', 'about', 'users'];

interface NavBarParams {
    toggleTheme: () => void;
}

export const NavBar: FC<NavBarParams> = ({ toggleTheme }): ReactElement => {
    const auth = useAppSelector((state) => state.auth);
    const state = auth.isLoggedIn ? signedInRoutes : signedOutRoutes;
    const dispatch = useAppDispatch();

    return (
        <StyledNavBar>
            <StyledNavLogo>
                <div id='logo-image-wrapper'>
                    <img src={anchorLogo} />
                </div>
                <div id='logo-text'>AUL FORUM</div>
            </StyledNavLogo>
            <NavRoutes routes={state} />
            {auth.isLoggedIn && (
                <button
                    className='logout-btn'
                    onClick={() => {
                        dispatch(logout());
                    }}
                >
                    Logout
                </button>
            )}
            <ThemeToggler {...{ toggleTheme }} />
        </StyledNavBar>
    );
};
