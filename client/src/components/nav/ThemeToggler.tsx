import { ReactElement, FC, useState } from 'react';
import StyledWrapper, { StyledToggle } from './ThemeToggler.styled';
import WindowResizeListener from '../../components/reusable/WindowResizeListener';

interface ThemeTogglerParams {
    toggleTheme: () => void;
}

const ThemeToggler: FC<ThemeTogglerParams> = ({ toggleTheme }): ReactElement | null => {
    const theme = window.localStorage.getItem('theme') || 'light';
    const [checked, changeChecked] = useState<boolean>(theme === 'dark' ? true : false);

    const onChange = (): void => {
        toggleTheme();
        changeChecked(!checked);
    };

    return (
        <WindowResizeListener minWidth={600}>
            <StyledWrapper>
                <StyledToggle>
                    <input {...{ checked, onChange }} className='toggle-input' type='checkbox' />
                    <div className='toggle-bg'></div>
                    <div className='toggle-switch'>
                        <div className='toggle-switch-figure'></div>
                        <div className='toggle-switch-figureAlt'></div>
                    </div>
                </StyledToggle>
            </StyledWrapper>
        </WindowResizeListener>
    );
};

export default ThemeToggler;
