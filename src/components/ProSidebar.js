import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import Link from "next/link";
import styles from "@/styles/Sidebar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { routes } from '../data/sidebar_data';


const ProSidebar = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  const toggle = () => {
    toggleSidebar();
    if (toggled) {
        collapseSidebar();
    } else {
        collapseSidebar();
    }
  };

  return (
    <Sidebar className={styles.sidebar} rtl={false}>
      <Menu>
        <MenuItem
          icon={<FontAwesomeIcon icon={faBars} />}
          onClick={() => {
            toggle();
          }}
          style={{  textAlign: "center" }}
        />
        <section>
          {routes.map((route, index) => (
            <Link key={index} className={styles.item} href={route.path}>
              <MenuItem 
                className={styles.menuItem} 
                icon={route.icon} 
              >
                {route.name}
              </MenuItem>
            </Link>
          ))}
        </section>
      </Menu>
    </Sidebar>
  )
}

export default ProSidebar