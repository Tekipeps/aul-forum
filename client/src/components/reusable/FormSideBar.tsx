import { ReactElement, useState, useEffect, FC } from 'react';
import styles from './FormSideBar.module.scss';

interface SideBarProp {
    children: string;
}


const SideBar: FC<SideBarProp> = ({ children }): ReactElement | null => {
    const [display, setDisplay] = useState(true);

    const handleDisplay = (): void => {
        window.innerWidth < 1100 ? setDisplay(false) : setDisplay(true);
    };
    window.addEventListener('resize', handleDisplay);

    useEffect(() => {
        handleDisplay();
    });

    if (!display) return null;
    return (
        <div className={styles.sideBar}>
            <p>{children}</p>
        </div>
    );
};

export default SideBar;
