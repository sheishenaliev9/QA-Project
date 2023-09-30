import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSneakers } from "../../store/SneakersSlice";
import { SneakerItem } from "../../components/SneakerItem/SneakerItem";
import styles from "./SneakersPage.module.css";

export const SneakersPage = () => {
  const [filteredSneakers, setFilteredSneakers] = useState([]);
  const [searchState, setSearchState] = useState("all");
  const [value, setValue] = useState("");
  const { sneakers } = useSelector((state) => state.sneakers);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setValue(searchValue);

    const newFilteredSneakers = sneakers.filter((sneaker) => {
      return sneaker.model.toLowerCase().includes(searchValue.toLowerCase());
    });
    setSearchState("filtered");
    setFilteredSneakers(newFilteredSneakers);

    if (newFilteredSneakers.length === 0) setSearchState("notFound");
  };

  const sneakersFilter = (e) => {
    const buttonName = e.target.name;

    if (buttonName === "all") {
      setSearchState(buttonName);
      setFilteredSneakers([]);
    } else {
      const filteredSneakers = sneakers.filter((sneaker) => {
        return sneaker.brand === buttonName;
      });
      setSearchState(buttonName);
      setFilteredSneakers(filteredSneakers);
    }
  };

  useEffect(() => {
    dispatch(getAllSneakers());
  }, []);

  return (
    <div className={styles.sneakers__wrapper}>
      <div className="container">
        <div className={styles.sneakers__inner}>
          <div className={styles.sneaker__title}>
            <h1>All Our Sneakers</h1>
            <h3>Choose Your own shoes</h3>
          </div>
          <div className={styles.sneakers__actions}>
            <div className={styles.sneakers__search}>
              <input
                type="text"
                placeholder="Search"
                value={value}
                onChange={handleSearch}
              />
            </div>

            <div className={styles.sneakers__filter}>
              <button onClick={sneakersFilter} name="all">
                All
              </button>
              <button onClick={sneakersFilter} name="Nike">
                Nike
              </button>
              <button onClick={sneakersFilter} name="Adidas">
                Adidas
              </button>
              <button onClick={sneakersFilter} name="New Balance">
                New Balance
              </button>
            </div>
          </div>

          <div className={styles.sneakers__cards}>
            {(searchState === "all" ? sneakers : filteredSneakers).map(
              (sneaker) => (
                <SneakerItem key={sneaker.id} sneaker={sneaker} />
              )
            )}
            {searchState === "notFound" && (
              <div className={styles.notFound}>Product is not found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
