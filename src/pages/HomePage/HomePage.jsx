import React from "react";
import styles from "./HomePage.module.css";
import shoesImg from "../../assets/shoes-block.png";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className={styles.home__wrapper}>
      <div className="container">
        <div className={styles.home__inner}>
          <div className={styles.home__title}>
            <p>Sneaker Collection</p>
            <h1>Good shoes take you good places</h1>
            <Link to="/sneakers">
              <button>Shop Now</button>
            </Link>
          </div>

          <div>
            <img src={shoesImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
