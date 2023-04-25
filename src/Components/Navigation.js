import React,{useState} from 'react'
import { Button, Modal } from 'antd';
import styles from '@/styles/Navigation.module.css'
import {FiArrowRight} from 'react-icons/fi'



const Navigation = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
 
  return (
  <section className={styles.header}>


<div className={styles.left}>

<span>Sending <span className={styles.percel}>percel</span> for <br/>  less and fast.</span>
<Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
</Modal>
<p className={styles.text2}>Track your package every step of the way with our advanced parcel tracking system, providing you with real-time updates on the status of your delivery, so you can stay informed and in control.</p>
<button className={styles.btn2} type="primary" onClick={showModal}>Sign up now <FiArrowRight/> </button>
</div>
    

<img className={styles.image} src="group2.jpg" alt="" />

  </section>

  )
}

export default Navigation
