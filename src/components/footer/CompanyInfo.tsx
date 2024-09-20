import styles from "./CompanyInfo.module.css";
import facebook from "/assets/shared/desktop/icon-facebook.svg";
import twitter from "/assets/shared/desktop/icon-twitter.svg";
import instagram from "/assets/shared/desktop/icon-instagram.svg";

function CompanyInfo() {
  return (
    <div className={styles.companyInfo}>
      <p className={styles.companyDescription}>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className={styles.socials}>
        <a href="#" className={styles.socialLink}>
          <img src={facebook} alt="" />
        </a>
        <a href="#">
          <img src={twitter} alt="" />
        </a>
        <a href="#">
          <img src={instagram} alt="" />
        </a>
      </div>
      <p className={styles.copyright}>Copyright 2021. All Rights Reserved</p>
    </div>
  );
}

export default CompanyInfo;
