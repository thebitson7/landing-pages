import React from "react";
import styles from "./CaloriesCard.module.css";

const CaloriesCard: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconSection}>
        <div className={styles.iconWrapper}>
          <div className={styles.iconBackground}>
            <img
              src="https://c.animaapp.com/maqpf1vmXlogmS/img/ellipse-1989-1.svg"
              alt="ellipse"
              className={styles.ellipse}
            />
            <img
              src="https://c.animaapp.com/maqpf1vmXlogmS/img/food.svg"
              alt="food icon"
              className={styles.foodIcon}
            />
          </div>
        </div>
        <div className={styles.textBlock}>
          <span className={styles.label}>Calories</span>
          <span className={styles.value}>1500</span>
          <span className={styles.unit}>Kcal</span>
        </div>
      </div>

      <div className={styles.graphSection}>
        <img
          src="https://c.animaapp.com/maqpf1vmXlogmS/img/vector-20.svg"
          alt="vector"
          className={styles.graphVector}
        />
        <img
          src="https://c.animaapp.com/maqpf1vmXlogmS/img/group-1.png"
          alt="graph1"
          className={styles.graphIcon}
        />
        <img
          src="https://c.animaapp.com/maqpf1vmXlogmS/img/group-2.png"
          alt="graph2"
          className={styles.graphIcon}
        />
        <img
          src="https://c.animaapp.com/maqpf1vmXlogmS/img/group-3.png"
          alt="graph3"
          className={styles.graphIcon}
        />
      </div>

      <button className={styles.editButton}>
        <img
          src="https://c.animaapp.com/maqpf1vmXlogmS/img/lucide-square-pen-3.svg"
          alt="edit"
        />
      </button>
    </div>
  );
};

export default CaloriesCard;
