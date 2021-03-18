import React from 'react';
import HomeNav from './HomeNav';

const MainLayout: React.FC = ({ children }) => {
    return (
        <div>
            <HomeNav />
            {children}
        </div>
    );
};

export default MainLayout;
