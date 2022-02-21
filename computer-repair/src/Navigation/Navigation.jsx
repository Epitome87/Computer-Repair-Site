import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.NavLogo}>
        <i class='fa-solid fa-wrench'></i>
        <div className={styles.LogoText}>
          <div>Repair Guy</div>
          <div>Mobile Phone & Computer Repair</div>
        </div>
      </div>
      <ul className={styles.NavItems}>
        <NavLink to={'/'} className={styles.NavItem}>
          Home
        </NavLink>
        <NavLink to={'/residential'} className={styles.NavItem}>
          Price List
        </NavLink>
        <NavLink to={'/business'} className={styles.NavItem}>
          Services
        </NavLink>
        <NavLink to={'/contact'} className={styles.NavItem}>
          Pages
        </NavLink>
        <NavLink to={'/about'} className={styles.NavItem}>
          Contact Us
        </NavLink>
      </ul>
      <div>
        <Button className={styles.NavCtaBtn}>
          <i class='fa-solid fa-phone'></i> (081) 90-8121
        </Button>
      </div>
    </nav>
  );
}

export default Navigation;
