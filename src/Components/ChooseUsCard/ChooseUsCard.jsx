import React from 'react'
import styles from './ChooseUsCard.module.css';
import Choose from "../../assets/Choose.png";

const ChooseUsCard = ({title}) => {
  return (
    <div className={styles.cardWrapper}>
            <img src={Choose} alt='gift' width={101} height={101} />
            <p className={styles.title}>{title} </p>
            <p className={styles.decription}>Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia
                consequatduis enim velit mollit Exer.
            </p>
            <button className={styles.btn}>Read More</button>
        </div>
  )
}

export default ChooseUsCard