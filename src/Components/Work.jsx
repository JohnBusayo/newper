import React from 'react'
import styles from '@/styles/Work.module.css'


function Work() {
  return (
    
    <section className={styles.work}>
    <span className={styles.title}>How it works</span>
    <span className={styles.description}> <span className={styles.steps}>6 steps </span> that helps you  get your parcel.</span>
    
    <main className={styles.container}>
    <div className={styles.top}>
    <div className={styles.box1}>
    <div className={styles.circle}>1</div>
    <span className={styles.title}>Registration</span>
    <h2>The user who wants to send  parcel can create an account by providing neccessary information required,or login if the user has an existing parcel drop account.</h2>

    </div>
    <div className={styles.box2}>
    <div className={styles.circle}>2</div>
    <span className={styles.title}>Create a request</span>
    <h2 className={styles.text}>The user creates a request by providing necessary details such as its pickup location, description of the parcel. If necessary the dimension and weight of the parcel.</h2>
    </div>
    <div className={styles.box3}>
    <div className={styles.circle}>3</div>
    <span className={styles.title}>Find a deliverer</span>
    <h2>The user search for deliverers on the website who are travelling to the same location u intend to send the parcel to. The deliverer can view the details of the request, he can either accept or reject the request.</h2>
    </div>
    </div>

    <div className={styles.down}>
    <div className={styles.box4}>
    <div className={styles.circle}>4</div>
    <span className={styles.title}>Make payment</span>
    <h2>The user can make payment to the deliverer but the website holds the payment in escrow until the delivery is successful.</h2>
    </div>
    <div className={styles.box5}>
    <div className={styles.circle}>5</div>
    <span className={styles.title}>Track parcel</span>
    <h2>The user can track the parcel from the pickup stage till the delivery stage</h2>
    </div>
    <div className={styles.box6}>
    <div className={styles.circle}>6</div>
    <span className={styles.title}>Comfirm delivery</span>
    <h2>Once the sender confirm the delivery the payment is now released to the deliverer.</h2>
    </div>
    </div>
    </main>
    
    </section>
  )
}

export default Work
