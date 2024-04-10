import React, { ReactNode } from 'react';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import Dnavbar from '../ui/dashboard/d-navbar/dnavbar';
import styles from './dashboard.module.css'
import Footer from '../ui/dashboard/footer/footer';
import Notification from '../ui/dashboard/notification/notification';
import Mobile_Sidebar from '../ui/dashboard/sidebar/mobile_sidebar';

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
        <Notification/>
        {children}
        {/* <Footer/> */}
      <Mobile_Sidebar/>
      </div>
    </div>
  );
};

export default Layout;
