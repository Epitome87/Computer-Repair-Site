import React from 'react';
import styles from './ServiceCard.module.css';

function ServiceCard({ title, body, icon }) {
  return (
    <div className={styles.ServiceCard}>
      <div className={styles.CardIcon}>
        <i class={`fa-solid fa-${icon}`}></i>
      </div>
      <div className={styles.CardText}>
        <p className={styles.CardHeader}>{title}</p>
        <p className={styles.CardBody}>{body}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
