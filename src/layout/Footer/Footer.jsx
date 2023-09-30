import React from "react";
import styles from "./Footer.module.css";
import { Logo } from "../../components/Logo/Logo";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <div className={styles.footer__logo}>
            <Logo />

            <div className={styles.footer__logo__subtitle}>
              <p>
                We don’t just sell shoes, we sell memories and collectibles. We
                collect the best in the best with an attention to all little
                details. we know that shoes speaks louder than words that’s why
                we’ve mastered the science of good sneakers.
              </p>
            </div>
          </div>

          <div className={styles.footer__other}>
            <p>Support line: +250 788 467 808</p>
            <p>Copyright  2021 © Sneaker City ltd</p>
          </div>
        </div>
      </div>
    </div>
  );
};
