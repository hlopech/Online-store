import styles from "./Filter.module.css";
import FilterParagraph from "./FilterParagraph";
import React, { useCallback, useState, useEffect } from "react";
function Filter({ possibleFilterArr, typeOfFilter, onAddAttribute }) {
  const [activeAttribute, setActiveAttribute] = useState([]);
  useEffect(() => {
    onAddAttribute(activeAttribute);
  }, [activeAttribute]);
  const handleAddFilterType = useCallback(
    (newType) => {
      if (!activeAttribute.includes(newType)) {
        setActiveAttribute([...activeAttribute, newType]);
      } else if (activeAttribute.includes(newType)) {
        setActiveAttribute((cur) => {
          return cur.filter((el) => el != newType);
        });
      }
    },
    [activeAttribute]
  );

  return (
    <div className={styles.filterContainer}>
      <span className={styles.nameOFlilter}>{typeOfFilter}</span>
      <ol className={styles.filterList}>
        {possibleFilterArr
          .sort((a, b) => a.localeCompare(b))
          .map((x) => (
            <FilterParagraph onAddType={handleAddFilterType} name={x} key={x} />
          ))}
      </ol>
    </div>
  );
}
export default React.memo(Filter);
