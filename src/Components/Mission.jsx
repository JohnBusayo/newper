import React from 'react'
import styles from '@/styles/Mission.module.css'

function Mission() {
  return (
   <section className={styles.mission}>
   
   <div className={styles.left}>
   <h1 className={styles.title}>OUR MISSION.</h1>
   <span >Creating a better <span className={styles.future}>future</span> together.</span>

  <p className={styles.longText}> We are commited to providing seamless and cost effective delivery experience. Connecting people from different part of Nigeria through our technology based platform. Parcel drop strives to create an environmental friendly delivery platform where senders and deliverer can connect and transact, with real life tracking of package to ensure timely delivery.</p>
 
   </div>
   
   <img className={styles.image} src="group2.jpg" alt="" />
  
   </section>

  )
}

export default Mission
