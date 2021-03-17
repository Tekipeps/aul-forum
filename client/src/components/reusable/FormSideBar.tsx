import { ReactElement, FC, ReactNode } from 'react';
import WindowResizeListener from './WindowResizeListener';
import styles from './FormSideBar.module.scss';

interface FormSideBarParams {
    children: string | ReactNode;
}

/**
 * specifies a value which if the windows width is smaller than, causes the FormSideBar to render null
 */
const MINIMUM_WINDOW_WIDTH = 1100;

const FormSideBar: FC<FormSideBarParams> = ({ children }): ReactElement | null => (
    <WindowResizeListener minWidth={MINIMUM_WINDOW_WIDTH}>
        <div className={styles.sideBar}>
            <p>{children}</p>
        </div>
    </WindowResizeListener>
);

export default FormSideBar;
