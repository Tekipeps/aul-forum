import { FC } from 'react';
import HomeNavigation from './HomeNavigation';
import SectionDescription from './PostSectionDescription';

const Layout: FC = ({ children }) => (
    <div>
        <HomeNavigation />
        <SectionDescription />
        {children}
    </div>
);

export default Layout;
