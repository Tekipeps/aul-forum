import React, { ReactElement, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/form-images/logo.png';
import './NavigationBar.scss';

const Routes = (): ReactElement | null => {
    const [display, setDisplay] = useState(true);
    const handleDisplay = () => {
        window.innerWidth < 700 ? setDisplay(false) : setDisplay(true);
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

export const NavBar = () => {
    return (
        <nav id='navbar'>
            <div id='logo'>
                <div>
                    <img src={Logo} />
                </div>
                <div>AUL Forum</div>
            </div>
            <div id='routes'>
                <Routes />
            </div>
        </nav>
    );
};
