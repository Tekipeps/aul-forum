import { ReactElement, FC, ReactNode } from 'react';
import WindowResizeListener from './WindowResizeListener';
import StyledFormSideBar from './FormSideBar.styled';

interface FormSideBarParams {
    children: string | ReactNode;
}

/**
 * specifies a value which if the windows width is smaller than, causes the FormSideBar to render null
 */
const MINIMUM_WINDOW_WIDTH = 1100;

const FormSideBar: FC<FormSideBarParams> = ({ children }): ReactElement | null => (
    <WindowResizeListener minWidth={MINIMUM_WINDOW_WIDTH}>
        <StyledFormSideBar>
            <p>{children}</p>
        </StyledFormSideBar>
    </WindowResizeListener>
);

export default FormSideBar;
