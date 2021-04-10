import { FC, useState, ReactElement, useEffect, useRef, cloneElement } from 'react';
import { getDOMElementRelativeWidth as getWidth } from '../../utils/Utility';

interface ParentResizeParams {
    children: ReactElement;
}

const ParentResizeListener: FC<ParentResizeParams> = ({ children }): ReactElement => {
    const [visibility, setVisibility] = useState<'visible' | 'hidden'>('visible');
    const ref = useRef<HTMLDivElement>(null);
    let resizeId: NodeJS.Timeout;
    const resizeInterval = 50;

    /*To prevent the elements state from being set multiple times during a window resize, we reduce the strain on the browser
     by making sure the state only sets when there is an interval of <resizeInterval>ms between resizes. i.e kinda listening to when the resize ends not the resize itself
    */
    const handleWindowResize = (): void => {
        clearTimeout(resizeId);
        resizeId = setTimeout(handleVisibility, resizeInterval);
    };

    const handleVisibility = (): void => {
        const { current } = ref;
        if (!current || !current.parentElement) return;
        const { parentElement } = current;
        getWidth(parentElement) < getWidth(current) ? setVisibility('hidden') : setVisibility('visible');
    };

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return cloneElement(children, { ref, style: { visibility, display: 'inline-block' } });
};

export default ParentResizeListener;
