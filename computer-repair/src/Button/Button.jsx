import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

function Button({ children, ...props }) {
  return (
    <div className={styles.Button}>
      <Link to=''>{children}</Link>
    </div>
  );
}

export default Button;
