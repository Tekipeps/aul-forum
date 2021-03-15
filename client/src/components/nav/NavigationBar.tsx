import { ReactElement, FC } from 'react';
import { Link } from 'react-router-dom';
import { WindowResizeListener } from '../reusable/ResizeListener';
import Logo from '../../assets/form-images/logo.png';
import styles from './NavigationBar.module.scss';

const Routes: FC = (): ReactElement | null => (
    <WindowResizeListener minWidth={800}>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/team'>Team</Link>
            </li>
        </ul>
    </WindowResizeListener>
);

export const NavBar: FC = (): ReactElement => (
    <nav id={styles.navbar}>
        <div id={styles.logo}>
            <div>
                <img src={Logo} />
            </div>
            <div>AUL Forum</div>
        </div>
        <div id={styles.routes}>
            <Routes />
        </div>
    </nav>
);
