import { FC, useState, ReactElement, useEffect, useRef } from 'react';

interface WindowResizeProps {
    children: ReactElement;
    minWidth: number;
}

interface ParentResizeProps {
    children: ReactElement;
}

export const WindowResizeListener: FC<WindowResizeProps> = ({ children, minWidth }): ReactElement | null => {
    const [display, setDisplay] = useState<boolean>(false);

    const handleWindowResize = (): void => {
        window.innerWidth < minWidth ? setDisplay(false) : setDisplay(true);
    };

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return display ? children : null;
};

export const ParentResizeListener: FC<ParentResizeProps> = ({ children }): ReactElement => {
    const [visiblilty, setVisibilty] = useState<'visible' | 'hidden'>('hidden');
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    const handleWindowResize = (): void => {
        const { current } = ref;
        if (!current) return;
        if (!current.parentElement) return;
        const parentWidth = current.parentElement.getBoundingClientRect().width;
        const currentWidth = current.getBoundingClientRect().width;

        if (parentWidth < current.offsetLeft + currentWidth - 40) setVisibilty('hidden');
        else setVisibilty('visible');
    };

    return (
        <div ref={ref} style={{ visibility: visiblilty, display: 'inline-block' }}>
            {children}
        </div>
    );
};
