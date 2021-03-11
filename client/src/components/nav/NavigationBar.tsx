import React, { ReactElement, FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/form-images/logo.png';
import styles from './NavigationBar.module.scss';

const Routes: FC = (): ReactElement | null => {
    const [display, setDisplay] = useState(true);
    const handleDisplay = () => {
        window.innerWidth < 800 ? setDisplay(false) : setDisplay(true);
    };
    window.addEventListener('resize', handleDisplay);

    useEffect(() => {
        handleDisplay();
    });

    if (!display) return null;
    return (
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
    );
};

export const NavBar: FC = (): ReactElement => (
<<<<<<< HEAD
    <nav id={styles.navbar}>
        <div id={styles.logo}>
=======
    <nav id='navbar'>
        <div id='logo'>
>>>>>>> 05bb5bc4c703e6748fe57e3c28c82cbe4e81f5e0
            <div>
                <img src={Logo} />
            </div>
            <div>AUL Forum</div>
        </div>
<<<<<<< HEAD
        <div id={styles.routes}>
=======
        <div id='routes'>
>>>>>>> 05bb5bc4c703e6748fe57e3c28c82cbe4e81f5e0
            <Routes />
        </div>
    </nav>
);
