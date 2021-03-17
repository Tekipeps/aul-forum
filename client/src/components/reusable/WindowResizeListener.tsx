import { FC, useState, ReactElement, useEffect } from 'react';

interface WindowResizeParams {
    children: ReactElement;
    minWidth: number;
}

const WindowResizeListener: FC<WindowResizeParams> = ({ children, minWidth }): ReactElement | null => {
    const initialDisplay: boolean = window.innerWidth < minWidth ? false : true;
    const [display, setDisplay] = useState<boolean>(initialDisplay);

    const handleWindowResize = (): void => {
        window.innerWidth < minWidth ? setDisplay(false) : setDisplay(true);
    };

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return display ? children : null;
};

export default WindowResizeListener;
