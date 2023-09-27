import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import basketIcon from "../../assets/basket-icon.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <div className={styles.header__logo}>
            <Link to="/">Sneakers .</Link>
          </div>
          <nav className={styles.header__nav}>
            <Link to="/">Home</Link>
            <Link to="/sneakers">Sneakers</Link>
          </nav>

          <div className={styles.header__actions}>
            <button>
              <img src={basketIcon} alt="basket" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
