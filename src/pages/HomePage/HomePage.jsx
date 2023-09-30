import React from "react";
import styles from "./HomePage.module.css";
import shoesImg from "../../assets/shoes-block.png";
import guaranteeIcon from "../../assets/guarantee.svg";
import uniqueIcon from "../../assets/unique.svg";
import trendIcon from "../../assets/trend.svg";
import { Link } from "react-router-dom";
import { MyButton } from '../../components/UI/MyButton/MyButton';

export const HomePage = () => {
  return (
    <div className={styles.home__wrapper}>
      <div className="container">
        <div className={styles.home__inner}>
          <div className={styles.home__block}>
            <div className={styles.home__title}>
              <p>Sneaker Collection</p>
              <h1>Good shoes take you good places</h1>
              <Link to="/sneakers">
                <MyButton>Shop Now</MyButton>
              </Link>
            </div>

            <div className={styles.home__img}>
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
              <div className={styles.home__info__block}>
                <img src={uniqueIcon} alt="unique" />
                <h4>Currated & unique collection</h4>
              </div>

              <div className={styles.home__info__block}>
                <img src={guaranteeIcon} alt="Guarantee" />
                <h4>100% Original sneakers</h4>
              </div>

              <div className={styles.home__info__block}>
                <img src={trendIcon} alt="trend" />
                <h4>Buy the latest & define the trends</h4>
              </div>
            </div>
            <div className={styles.home__about__block}>
              <h2>WE LEAD WITH INNOVATIVE PRODUCT</h2>
              <p>
                True innovation isn’t just new and different. It’s new and
                better. It’s surprising. Sometimes it’s shocking. Nobody does
                that better than Nike. Yet we know you can’t anoint yourself as
                innovative the consumer ultimately decides that for themselves.
                That’s why we spend so much time with athletes and consumers
                listening, observing, studying and then creating products that
                enhance athletic performance and overall consumer experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
