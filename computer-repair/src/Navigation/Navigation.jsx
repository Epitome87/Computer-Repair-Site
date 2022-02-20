import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <ul className={styles.NavItems}>
        <NavLink to={'/'} className={styles.NavItem}>
          Home
        </NavLink>
        <NavLink to={'/residential'} className={styles.NavItem}>
          Residential Services
        </NavLink>
        <NavLink to={'/business'} className={styles.NavItem}>
          Business Services
        </NavLink>
        <NavLink to={'/contact'} className={styles.NavItem}>
          Contact
        </NavLink>
        <NavLink to={'/about'} className={styles.NavItem}>
          About
        </NavLink>
        <NavLink to={'/blog'} className={styles.NavItem}>
          Blog
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
