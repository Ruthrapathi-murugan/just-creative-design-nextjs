"use client";
import styles from "./IntroSection.module.css";

export default function IntroSection() {
  return (
    <>
    <section className={styles.intro}>
      <h2 style={{fontFamily:"Helvetica Neue"}}>Your Dream Home Starts Here</h2>
      <h6>Welcome to Just Creative Designs –Best Interior Design Company in Bangalore</h6>

      <p>
        We’re your go‑to partner for designing a home that truly reflects you. Whether you're moving into a new home or refreshing an existing one, our goal is simple: provide elegant, functional, and personalised design solutions that are tailored to your lifestyle.<span>
<br></br>

We are based in Bangalore and specialize in home interior design that blends aesthetics and usability. Only smart designs that feel cozy, homey, and totally. you.
              </span></p>
      <div className={styles.buttons}>
        <button className={styles.primary}>Book a Free Consultation Call</button>
        <button className={styles.secondary}>Get A free Quote</button>
      </div>
    </section>
     <div className={styles.statsRow} >
      <div className={styles.stat}>
        <h2>100+</h2>
        <p>Project Completed</p>
      </div>
      <div className={styles.stat} >
        <h2>2L+ SF</h2>
        <p>Year of crafting-Space</p>
      </div>
      <div className={styles.stat} >
        <h2>4.8 </h2>
        <p>Rating</p>
      </div>
    </div>
    </>
  );
}
