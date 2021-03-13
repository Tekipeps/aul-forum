import { ReactElement, FC } from 'react';
import WindowResizeListener from './WindowResizeListener';
import styles from './FormSideBar.module.scss';

interface SideBarProp {
    children: string;
}

const SideBar: FC<SideBarProp> = ({ children }): ReactElement | null => (
    <WindowResizeListener minWidth={1100}>
        <div className={styles.sideBar}>
            <p>{children}</p>
        </div>
    </WindowResizeListener>
);

export default SideBar;
