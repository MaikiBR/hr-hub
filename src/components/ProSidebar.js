import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import Link from "next/link";
import styles from "@/styles/Sidebar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { routes } from '../data/sidebar_data';
import { Box } from '@mui/material';

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
    <Box className={styles.sidebarContainer}>
      <Sidebar className={styles.sidebar} rtl={false}>
        <Menu>
          <MenuItem
            className={styles.toggleBtn}
            onClick={() => {
              toggle();
            }}
            style={{  textAlign: "center" }}
            icon={<FontAwesomeIcon icon={faBars} />}
          />
        </Menu>
          <Menu>
            {routes.map((route, index) =>
              route.isDisabled ? (
                <MenuItem key={index} className={styles.menuItem} icon={route.icon} disabled>
                  {route.name}
                </MenuItem>
              ) : (
                <Link key={index} className={styles.item} href={route.path} legacyBehavior>
                  <a>
                    <MenuItem className={styles.menuItem} icon={route.icon}>
                      {route.name}
                    </MenuItem>
                  </a>
                </Link>
              )
            )}
          </Menu>
      </Sidebar>
    </Box>
  )
}

export default ProSidebar