import React from "react";
import { useNavigate } from "react-router";
import styles from "./SneakerItem.module.css";
// import addToCartIcon from "../../assets/cart-add-button_icon-icons.com_56132.svg";

export const SneakerItem = ({ sneaker }) => {
  const navigate = useNavigate();
  const handleNavigate = (id) => navigate(`/sneakers/${id}`);

  const { id, image, model, price } = sneaker;
  return (
    <>
      <div className={styles.card} onClick={() => handleNavigate(id)}>
        <div className={styles.card__image}>
          <img src={image} alt={model} />
        </div>

        <div className={styles.card__inner}>
          <div className={styles.card__title}>
            <h3>{model}</h3>
            <p>${price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
