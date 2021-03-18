import { FC } from 'react';
import HomeNavigation from './HomeNavigation';

const Layout: FC = ({ children }) => (
    <div>
        <HomeNavigation />
        {children}
    </div>
);

export default Layout;
