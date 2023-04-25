import React from 'react'
import styles from '@/styles/About.module.css'
import {FiArrowRight} from 'react-icons/fi'

function About () {
  return (
    <section className={styles.about}>
   
    <div className={styles.center}>
    <img className={styles.middle} src="s1.avif" alt="" />
    <img className={styles.img1} src="group2.jpg" alt="" /> 
    <img className={styles.img2} src="group2.jpg" alt="" /> 
    <img className={styles.img3} src="group2.jpg" alt="" /> 
    <img className={styles.img4} src="group2.jpg" alt="" /> 
    <img className={styles.img5} src="group2.jpg" alt="" /> 
    <img className={styles.img6} src="group2.jpg" alt="" /> 
    <div className={styles.img3}></div>
    <div className={styles.img11}></div>
    <div className={styles.img22}></div>
    <div className={styles.img33}></div>
    <div className={styles.img44}></div>
    <div className={styles.img55}></div>
    <div className={styles.img66}></div>

    </div>
    
    <h1>About Us</h1>
    <span>Experience the <br/> <span className={styles.difference}>difference.</span> </span>
   
    
    <p>Parcel drop was founded in 2023 consisting of teams of passionate individuals who strongly believe that peer-to-peer delivery can revolutionalize delivery system in......</p>
     

    <button className={styles.btn1}>Read more <FiArrowRight/></button>
   
  
    </section>
  )
}

export default About
