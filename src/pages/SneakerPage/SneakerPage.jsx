import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addToCart, getCartItems, getSneaker } from "../../store/SneakersSlice";
import { MyButton } from "../../components/UI/MyButton/MyButton";
import cartSuccessIcon from "../../assets/cart_success_icon.svg";
import styles from "./SneakerPage.module.css";

export const SneakerPage = () => {
  const [isAdded, setIsAdded] = useState(false);
  const { id } = useParams();
  const { sneaker, cart } = useSelector((state) => state.sneakers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSneaker(id));
    dispatch(getCartItems());
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    console.log(cart);
    if (cart.find((cartItem) => cartItem.id === sneaker.id)) {
      setIsAdded(true);
    }
  }, [sneaker, cart]);

  return (
    <div className={styles.sneaker__wrapper}>
      <div className="container">
        <div className={styles.sneaker__inner}>
          <div className={styles.sneaker__image}>
            <img src={sneaker.image} alt={sneaker.model} />
          </div>

          <div className={styles.sneaker__title}>
            <h1>{sneaker.model}</h1>
            <h3>${sneaker.price}</h3>
            <p>{sneaker.about}</p>

            <div className={styles.sneaker__title__actions}>
              {isAdded ? (
                <div className={styles.sneaker__success}>
                  <img src={cartSuccessIcon} alt="" />
                  <span>Product is Added</span>
                </div>
              ) : (
                <MyButton onClick={() => handleAddToCart(sneaker)}>
                  Add to cart
                </MyButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
