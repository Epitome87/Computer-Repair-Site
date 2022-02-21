import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <ul>
        <div>Services</div>
        <li>Smartphone Repair</li>
        <li>Laptop Repair</li>
        <li>Desktop Repair</li>
        <li>Tablet Repair</li>
        <li>SmartWatch Repair</li>
      </ul>
      <ul>
        <div>Quick Link</div>
        <li>About</li>
        <li>Careers</li>
        <li>Price List</li>
        <li>Contact</li>
        <li>FAQ</li>
      </ul>
    </footer>
  );
}

export default Footer;
