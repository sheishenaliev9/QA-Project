import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSneakers } from "../../store/SneakersSlice";
import { SneakerItem } from "../../components/SneakerItem/SneakerItem";
import styles from "./SneakersPage.module.css";

// ... ваши другие импорты

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
          <div className={styles.sneakers__actions}>
            <div className={styles.sneakers__search}>
              <input
                type="text"
                placeholder="Поиск"
                value={value}
                onChange={handleSearch}
              />
            </div>

            <div className={styles.sneakers__filter}>
              <button onClick={sneakersFilter} name="all">
                Все
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
            {(searchState === "all" ? sneakers : filteredSneakers).map((sneaker) => (
              <SneakerItem key={sneaker.id} sneaker={sneaker} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

