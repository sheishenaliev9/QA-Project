import React, { useEffect } from "react";
import styles from "./CartPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { DeleteFromCart, getCartItems } from "../../store/SneakersSlice";
import trashIcon from "../../assets/delete-trash.svg";
import { MyButton } from "../../components/UI/MyButton/MyButton";

export const CartPage = () => {
  const { cart } = useSelector((state) => state.sneakers);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleDelete = async (id) => {
    await dispatch(DeleteFromCart(id));
    dispatch(getCartItems());
  };

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <div className={styles.cart__wrapper}>
      <div className="container">
        <div className={styles.cart__inner}>
          <div className={styles.cart__list}>
            <h2>Your shopping cart</h2>
            {cart.map((item) => {
              return (
                <div className={styles.cart__list__item} key={item.id}>
                  <img src={item.image} alt="" />
                  <div className={styles.cart__item__title}>
                    <h3>{item.model}</h3>
                    <p>{item.price}</p>
                  </div>
                  <button
                    className={styles.cart__item__actions}
                    onClick={() => handleDelete(item.id)}
                  >
                    <img src={trashIcon} alt="" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className={styles.cart__order}>
            <h3>Order summary</h3>
            <div className={styles.cart__order__info}>
              <div className={styles.card__order__total}>
                <p>Total</p>
                <p>${total}</p>
              </div>

              <div className={styles.card__order__actions}>
                <MyButton>Purchase</MyButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
