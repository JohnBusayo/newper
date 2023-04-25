import React from 'react'
import styles from '@/styles/Signup.module.css'

function Signup() {
  return (
   <section className={styles.sign}>
   <div className={styles.signupbox}>
   <span className={styles.title}>Haven’t created an account?</span>
   <span className={styles.text}>Create an account to start sending parcels to your loved ones.</span>
   <button className={styles.btn}>Get Started</button>
   </div>
   <img src="s3.avif" alt="our mission image" className={styles.img}/>
   </section>
  )
}

export default Signup
