import { ReactElement, FC, ReactNode } from 'react';
import { WindowResizeListener } from './ResizeListener';
import styles from './FormSideBar.module.scss';

interface FormSideBarParams {
    children: string | ReactNode;
}

const FormSideBar: FC<FormSideBarParams> = ({ children }): ReactElement | null => (
    <WindowResizeListener minWidth={1100}>
        <div className={styles.sideBar}>
            <p>{children}</p>
        </div>
    </WindowResizeListener>
);

export default FormSideBar;
