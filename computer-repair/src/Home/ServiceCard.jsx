import React from 'react';
import styles from './ServiceCard.module.css';

function ServiceCard({ title, body }) {
  return (
    <div className={styles.ServiceCard}>
      <div className={styles.CardIcon}></div>
      <div className={styles.CardText}>
        <p className={styles.CardHeader}>{title}</p>
        <p className={styles.CardBody}>{body}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
