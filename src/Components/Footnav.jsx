import React from 'react'
import styles from '@/styles/Footnav.module.css'

const Footnav = () => {
  return (
   <section className={styles.footnav}>
  <ul className={styles.list}>
  <li>Home</li>
  <li>Our mission</li>
  <li>Business solution</li>
  </ul>

  <div className={styles.logo}>
  <img className={styles.image} src="Logo.jpg" alt="logo image" />
  <span>Parcel</span> <span className={styles.drop}>drop</span>
  </div>

  <ul className={styles.list}>
  <li>About us</li>
  <li>How it works</li>
  </ul>
   </section>
  )
}

export default Footnav
