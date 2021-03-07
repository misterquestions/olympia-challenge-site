import React from 'react';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import Footer from './Footer';

const Layout: React.FC = ({ children }: any) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    }}
  >
    <PrimarySearchAppBar />
    {children}
    <Footer />
  </div>
);

export default Layout;
