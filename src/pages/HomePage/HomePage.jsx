import React from "react";
import styles from "./HomePage.module.css";
import shoesImg from "../../assets/shoes-block.png";
import guaranteeIcon from '../../assets/guarantee.svg';
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className={styles.home__wrapper}>
      <div className="container">
        <div className={styles.home__inner}>
          <div className={styles.home__title}>
            <div>
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

          <div className={styles.home__about}>
            <div className={styles.home__about__title}>
              <h2>Good sneakers</h2>
              <h2>take you good places</h2>
              <p>look no further, this is where you find the best pair!</p>
            </div>

            <div className={styles.home__about__info}>
              <img src={guaranteeIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
