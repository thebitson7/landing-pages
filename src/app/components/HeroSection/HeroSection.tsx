import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h1 className={styles.heading}>Nutrition Built For Your Biology</h1>
          <p className={styles.subheading}>
            The world’s first AI nutrition platform that adapts to your body, not the average one.
            <br />
            Eat better. Recover faster. Optimize everything.
          </p>
        </div>

        <div className={styles.storeButtons}>
          <div className={styles.appStore}>
            <img
              src="https://c.animaapp.com/maqpf1vmXlogmS/img/apple.svg"
              alt="Apple"
              className={styles.icon}
            />
            <div className={styles.textGroup}>
              <span className={styles.smallText}>Download on the</span>
              <span className={styles.largeText}>App Store</span>
            </div>
          </div>

          <div className={styles.googlePlay}>
            <img
              src="https://c.animaapp.com/maqpf1vmXlogmS/img/playstore.svg"
              alt="Play Store"
              className={styles.icon}
            />
            <div className={styles.textGroup}>
              <span className={styles.smallText}>GET IT ON</span>
              <img
                src="https://c.animaapp.com/maqpf1vmXlogmS/img/path90.svg"
                alt="Google Play"
                className={styles.googleLogo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
