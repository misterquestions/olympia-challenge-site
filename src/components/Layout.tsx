import React from 'react';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import Footer from './Footer';

const Layout: React.FC = ({ children }: any) => (
  <div style={{ boxSizing: 'border-box', margin: 0, padding: 0 }}>
    <PrimarySearchAppBar />
    {children}
    <Footer />
  </div>
);

export default Layout;
