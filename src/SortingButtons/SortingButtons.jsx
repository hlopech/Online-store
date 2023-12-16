import { useState } from "react";
import styles from "./SortingButtons.module.css";
import React from "react";

function SortingButtons({ sortTypesArray, onSetSortType }) {
  const [activeBut, setActiveBut] = useState(sortTypesArray[0]);

  const handleOnSetSortType = (type) => {
    setActiveBut(type);
    onSetSortType(type);
  };

  return (
    <div className={styles.sortingContainer}>
      {sortTypesArray.map((type, index) => (
        <label
          key={index}
          className={`${styles.radioButtonLabel} ${
            activeBut === type ? styles.active : ""
          }`}
        >
          {type}
          <input
            type="radio"
            value={type}
            checked={activeBut === type}
            onChange={() => handleOnSetSortType(type)}
            className={styles.radioButton}
          />
        </label>
      ))}
    </div>
  );
}

export default React.memo(SortingButtons);
