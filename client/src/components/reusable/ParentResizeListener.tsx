import { FC, useState, ReactElement, useEffect, useRef, cloneElement } from 'react';

interface ParentResizeParams {
    children: ReactElement;
}

type visibilityStates = 'visible' | 'hidden';

const ParentResizeListener: FC<ParentResizeParams> = ({ children }): ReactElement => {
    const [visibility, setVisibility] = useState<visibilityStates>('visible');
    const ref = useRef<HTMLDivElement>(null);

    const getTotalLeft = (element: HTMLElement): number => element.offsetWidth + element.offsetLeft;

    const handleWindowResize = (): void => {
        const { current } = ref;
        if (!current || !current.parentElement) return;
        const { parentElement } = current;
        const DETECTION_ADJUSTER = 10;
        if (getTotalLeft(parentElement) + DETECTION_ADJUSTER < getTotalLeft(current)) setVisibility('hidden');
        else setVisibility('visible');
    };

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return cloneElement(children, { ref, style: { visibility, display: 'inline-block' } });
};

export default ParentResizeListener;
