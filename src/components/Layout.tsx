import React from 'react';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div style={{ boxSizing: 'border-box', margin: 0, padding: 0 }}>
    <PrimarySearchAppBar />
    {children}
    <Footer />
  </div>
);

export default Layout;
