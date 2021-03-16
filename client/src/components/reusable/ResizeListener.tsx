import { FC, useState, ReactElement, useEffect, useRef } from 'react';

interface WindowResizeParams {
    children: ReactElement;
    minWidth: number;
}

interface ParentResizeParams {
    children: ReactElement;
}

export const WindowResizeListener: FC<WindowResizeParams> = ({ children, minWidth }): ReactElement | null => {
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

export const ParentResizeListener: FC<ParentResizeParams> = ({ children }): ReactElement => {
    const [visiblilty, setVisibilty] = useState<'visible' | 'hidden'>('hidden');
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    const getTotalWidth = (element: HTMLElement): number => {
        const marginLeft = parseFloat(window.getComputedStyle(element).marginLeft) || 1;
        const paddingLeft = parseFloat(window.getComputedStyle(element).paddingLeft) || 1;
        return element.offsetWidth + paddingLeft + marginLeft;
    };

    const handleWindowResize = (): void => {
        const { current } = ref;
        if (!current || !current.parentElement) return;

        const parentWidth = getTotalWidth(current.parentElement);
        if (parentWidth <= current.offsetLeft + current.offsetWidth) setVisibilty('hidden');
        else setVisibilty('visible');
    };

    return (
        <div ref={ref} style={{ visibility: visiblilty, display: 'inline-block' }}>
            {children}
        </div>
    );
};
