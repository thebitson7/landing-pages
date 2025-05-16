import React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img
          className={styles.logoImage}
          src="/svg/logo.svg"
          alt="Logo"
        />
      </div>
      <nav className={styles.navLinks}>
        <a href="#features" className={styles.link}>Features</a>
        <a href="#pricing" className={styles.link}>Pricing</a>
        <a href="#contact" className={styles.link}>Contact</a>
      </nav>
      <button className={styles.ctaButton}>
        <span className={styles.ctaText}>Sign Up</span>
      </button>
    </header>
  );
};

export default Navbar;
