import React from 'react';
import PrimarySearchAppBar from './PrimarySearchAppBar';

const Layout: React.FC = ({ children }) => (
  <div>
    <PrimarySearchAppBar />
    {children}
  </div>
);

export default Layout;
