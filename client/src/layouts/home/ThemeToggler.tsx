import { ReactElement, FC, useState } from 'react';
import StyledWrapper, { StyledToggle, StyledToggleCaption } from './ThemeToggler.styled';

interface ThemeTogglerParams {
    toggleTheme: () => void;
}

const ThemeToggler: FC<ThemeTogglerParams> = ({ toggleTheme }): ReactElement => {
    const theme = window.localStorage.getItem('theme') || 'light';
    const [checked, changeChecked] = useState(theme === 'dark' ? true : false);

    const onChange = (): void => {
        toggleTheme();
        changeChecked(!checked);
    };

    return (
        <StyledWrapper>
            <StyledToggle>
                <input {...{ checked, onChange }} className='toggle-input' type='checkbox' />
                <div className='toggle-bg'></div>
                <div className='toggle-switch'>
                    <div className='toggle-switch-figure'></div>
                    <div className='toggle-switch-figureAlt'></div>
                </div>
            </StyledToggle>
            <StyledToggleCaption>{`${theme} mode enabled`}</StyledToggleCaption>
        </StyledWrapper>
    );
};

export default ThemeToggler;
