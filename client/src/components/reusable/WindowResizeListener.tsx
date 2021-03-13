import { FC, useState, ReactElement, useEffect } from 'react';

interface ListenerType {
    children: ReactElement;
    minWidth: number;
}

const WindowResizeListener: FC<ListenerType> = ({ children, minWidth }): ReactElement | null => {
    const [display, setDisplay] = useState(true);

    useEffect(() => {
        const handleDisplay = (): void => {
            window.innerWidth < minWidth ? setDisplay(false) : setDisplay(true);
        };

        window.addEventListener('resize', handleDisplay);
        window.addEventListener('load', handleDisplay);
        return () => {
            window.removeEventListener('resize', handleDisplay);
            window.removeEventListener('load', handleDisplay);
        };
    }, []);

    if (!display) return null;
    return children;
};

export default WindowResizeListener;
