import { FC, ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import HomeNavigation from './HomeNavigation';
import SectionDescription from './PostSectionDescription';
import PostSection from './PostSection';
import RightSection from './RightSection';
import CreatePostModal from './CreatePostModal';

const StyledMain = styled.div`
    display: flex;
`;

const Layout: FC = (): ReactElement => {
    const [modalState, setModalState] = useState<'open' | 'closed'>('closed');

    useEffect(() => {
        if (modalState === 'open') document.body.style.overflow = 'hidden';
        document.body.style.overflow = modalState === 'open' ? 'hidden' : 'scroll';
    }, [modalState]);

    const openPostModal = () => {
        setModalState('open');
    };

    const closePostModal = () => {
        setModalState('closed');
    };

    return (
        <div>
            <HomeNavigation />
            <SectionDescription />
            <StyledMain>
                <PostSection />
                <RightSection openModal={openPostModal} />
            </StyledMain>
            {modalState === 'open' && <CreatePostModal closeModal={closePostModal} />}
        </div>
    );
};

export default Layout;
