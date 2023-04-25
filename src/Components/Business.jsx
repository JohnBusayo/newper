import React from 'react'
import styles from '@/styles/Business.module.css'

function Business() {
  return (
   <section className={styles.business}>
   
   <div className={styles.left}>
   <h1 className={styles.titles}>BUSINESS SOLUTION.</h1>
   <span>Discover <span className={styles.innovative}>innovative</span> business solution.</span>
   <p>At parcel drop we are committed to ensure timely and secure delivery process. Through this type of delivery service user will be able to get deliveries done at a lower cost than the traditional delivery service. This creates jobs opportunities for deliverer which alleviates unemployment in Nigeria. We are a team of passionate individuals who is looking forward to making delivery convenient without having the user leave his home.</p>
   </div>
   
   <img src="unsplash.png" alt="Business image" />
  
  
   </section>
  )
}

export default Business
