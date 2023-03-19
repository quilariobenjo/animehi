import React from 'react';
import Header from '@/components/layout/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <h1 className="sr-only">Watch Anime without ads</h1>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
