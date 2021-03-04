import React from 'react';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import Footer from './Footer';

const Layout: React.FC = ({ children }: any) => (
  <div>
    <PrimarySearchAppBar />
    {children}
    <Footer />
  </div>
);

export default Layout;
