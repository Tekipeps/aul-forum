import { FC, useState, ReactElement, useEffect, useRef, cloneElement } from 'react';

interface ParentResizeParams {
    children: ReactElement;
}

const ParentResizeListener: FC<ParentResizeParams> = ({ children }): ReactElement => {
    const [visibility, setVisibility] = useState<'visible' | 'hidden'>('hidden');
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    const getTotalLeft = (element: HTMLElement): number => element.offsetWidth + element.offsetLeft;

    const handleWindowResize = (): void => {
        const { current } = ref;
        if (!current || !current.parentElement) return;
        const { parentElement } = current;

        const DETECTION_ADJUSTER = 10;
        if (getTotalLeft(parentElement) + DETECTION_ADJUSTER < getTotalLeft(current)) setVisibility('hidden');
        else setVisibility('visible');
    };

    return cloneElement(children, { ref, style: { visibility, display: 'inline-block' } });
};

export default ParentResizeListener;
