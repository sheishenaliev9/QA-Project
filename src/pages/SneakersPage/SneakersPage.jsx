import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSneakers } from "../../store/SneakersSlice";
import styles from "./SneakersPage.module.css";


export const SneakersPage = () => {
  const { sneakers } = useSelector((state) => state.sneakers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSneakers());
  }, []);

  return (
    <div className={styles.sneaker__cards}>
      {sneakers.map((sneaker) => {
        const { id, image, model, price } = sneaker;
        return (
          <div key={id} className={styles.card}>
            <div className={styles.card__image}>
              <img src={image} alt={model} />
            </div>

            <div className={styles.card__inner}>
              <div className={styles.card__title}>
                <h3>{model}</h3>
                <p>${price}</p>
              </div>

              <div className={styles.card__actions}>
                <button>add</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
