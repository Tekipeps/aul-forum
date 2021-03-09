import React, { ReactElement, useState, useEffect } from 'react';

interface SideBarProp {
    content: string;
}

const SideBar = ({ content }: SideBarProp): ReactElement | null => {
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
        <div id='form-sidebar'>
            <p>{content}</p>
        </div>
    );
};

export default SideBar;
