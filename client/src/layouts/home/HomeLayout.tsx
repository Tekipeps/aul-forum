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
        document.body.style.overflow = modalState === 'open' ? 'hidden' : 'scroll';
    }, [modalState]);

    return (
        <div>
            <HomeNavigation />
            <SectionDescription />
            <StyledMain>
                <PostSection />
                <RightSection openModal={() => setModalState('open')} />
            </StyledMain>
            {modalState === 'open' && <CreatePostModal closeModal={() => setModalState('closed')} />}
        </div>
    );
};

export default Layout;
