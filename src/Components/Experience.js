import React from 'react'
import styles from '@/styles/Experience.module.css'
import {FiArrowRight} from 'react-icons/fi'

const Experience = () => {
  return (
   <section className={styles.experience}>
   <span>Experience a <span className={styles.seamless}>seamless</span> delivery process.</span>
  <p>Experience Seamless Delivery Process: Effortlessly Receive Your <br/> Orders with Our Smooth Delivery Experience. Enjoy Hassle-Free <br/> Delivery of Your Products and Services, Every Time.</p>
   <button className={styles.btn}>Sign up now <FiArrowRight/> </button>
  </section>
  )
}

export default Experience
