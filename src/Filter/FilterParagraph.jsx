import { useState } from "react";
import styles from "./Filter.module.css";
import React from "react";

function FilterParagraph({ name, onAddType, products }) {
  const [activeFilter, setActiveFilter] = useState(false);
  const handleAdd = () => {
    setActiveFilter(!activeFilter);
    onAddType(name, products);
  };

  return (
    <li className={styles.filterEl}>
      <input
        checked={activeFilter}
        onChange={handleAdd}
        className={styles.checkbox}
        type="checkbox"
      />
      <span className={styles.filterElText}>{name}</span>
    </li>
  );
}
export default React.memo(FilterParagraph);
