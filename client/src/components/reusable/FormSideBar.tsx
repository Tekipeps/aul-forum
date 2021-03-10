import React, { ReactElement, useState, useEffect, FC } from 'react';
import styled from 'styled-components';

interface SideBarProp {
    children: string;
}

const StyledDiv = styled.div`
    width: 450px;
    font-family: Quantico;
    background-color: #37173d;
    color: white;
    padding: 0px;
    position: relative;
    > p {
        margin-left: 30px;
        position: absolute;
        width: 90%;
        height: 80%;
        word-wrap: break-word;
        font-size: 46px;
    }
`;

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
        <StyledDiv>
            <p>{children}</p>
        </StyledDiv>
    );
};

export default SideBar;
