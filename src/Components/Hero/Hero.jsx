import React from 'react'
import Landing from "../../assets/Landing.png";
import MailLogo from "../../assets/MailLogo.png";
import Styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={Styles.heroWrapper} >
    <div className={Styles.hero_info}>
        <div className={Styles.heroHeading}>
            <h1 className={Styles.heroTitle}>You don’t have to </h1>
            <h1 className={Styles.heroTitle2}>Fight them Alone.</h1>
        </div>
        <p className={Styles.heroSubtitle}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
        <form className={Styles.hero_input}>
             <div className={Styles.placeholder}>
                <img src={MailLogo} alt='mail' className='icon' /> <span>Enter your email address</span>
            </div>
            <input type="text" className={Styles.input} placeholder="" />

            <button type='submit' className={Styles.btn}  >Let's Talk</button>
        </form>
    </div>
    <div className={Styles.hero_img}>
        <img src={Landing} alt='person' className={Styles.Personimg} />
    </div>
</div>
  )
}

export default Hero