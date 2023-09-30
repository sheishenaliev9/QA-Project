import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/logo-icon.svg";
export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src={logoIcon} alt="Logo" />
        <p>Sneakers .</p>
      </Link>
    </div>
  );
};
