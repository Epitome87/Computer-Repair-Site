import React from 'react';
import ServiceCard from './ServiceCard';
import Button from '../Button/Button';
import styles from './Home.module.css';

function Home(props) {
  return (
    <div className={styles.Home}>
      <main className={styles.Hero}>
        <h1 className={styles.HeroHeader}>
          Fast and reliable gadget repair services
        </h1>
        <p className={styles.HeroBody}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          similique delectus dignissimos velit cum dolore!
        </p>
        <div>
          <Button className={styles.BtnGetStarted}>Get Started</Button>
          <Button classname={styles.BtnContact}>Contact Us</Button>
        </div>
      </main>

      {/* Services Section */}
      <section className={styles.Services}>
        {/* <h2>Services We Offer</h2> */}
        <div className={styles.ServiceList}>
          <ServiceCard
            title='Repair Service'
            icon='screwdriver-wrench'
            body='Ut elit tellus, luctus nec ullamper mattis, pulvinar dapibus leo.'
          />
          <ServiceCard
            title='Square Parts'
            icon='database'
            body='Ut elit tellus, luctus nec ullamper mattis, pulvinar dapibus leo.'
          />
          <ServiceCard
            title='Data Recovery'
            icon='lock'
            body='Ut elit tellus, luctus nec ullamper mattis, pulvinar dapibus leo.'
          />
        </div>
      </section>

      {/* About Our Culture Section */}
      <section className={styles.About}>
        <div className={styles.Container}>
          <div className={styles.AboutImageContainer}>
            <div className={styles.FakeImg}>
              "We will fix it, till we make it"
            </div>
            <div className={styles.FakeImg}></div>
            <div className={styles.FakeImg}></div>
            <div className={styles.FakeImg}></div>
          </div>
          <div className={styles.AboutText}>
            <h3>About our culture</h3>
            <p>Leading the way in repair solution</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quam
              mollitia non accusantium! Repudiandae quasi sint numquam quos?
              Pariatur, laborum!
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section></section>

      {/* Service (Detailed) Section */}
      <section></section>

      {/* Contact Us Section */}
      <section className={styles.Contact}>
        <div className={styles.ContactGridContainer}>
          <div className={styles.ContactText}>
            <h5 className={styles.ContactHeader}>
              Get support for your problem
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              aliquam vel.
            </p>
          </div>
          <div className={styles.ContactCardFlexContainer}>
            <div className={styles.ContactCard}>
              <div className={styles.CardIcon}>
                <i class='fa-solid fa-envelope'></i>
              </div>
              <div className={styles.CardText}>
                <p>Send us an email</p>
                <p>contact@tokomoo.com</p>
              </div>
            </div>
            <div className={styles.ContactCard}>
              <div className={styles.CardIcon}>
                <i class='fa-solid fa-phone'></i>
              </div>
              <div className={styles.CardText}>
                <p>Send us an email</p>
                <p>(120) 801-1901</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
