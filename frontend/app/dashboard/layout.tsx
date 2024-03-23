import React, { ReactNode } from 'react';
import Sidebar from '../ui/sidebar/sidebar';
import Dnavbar from '../ui/d-navbar/dnavbar';
import styles from './dashboard.module.css'

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container} >
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Dnavbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
