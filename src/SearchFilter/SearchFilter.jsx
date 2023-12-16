import { useCallback } from "react";
import styles from "./SearchFilter.module.css";
import searchIcon from "../icons/search-icon.svg";
import React from "react";

function SearchFilter({ onSetActiveString }) {
  const handleSetActiveString = useCallback((e) => {
    onSetActiveString(e.target.value);
  }, []);
  return (
    <div className={styles.searchContainer}>
      <img className={styles.searchIcon} src={searchIcon}></img>

      <input
        onChange={handleSetActiveString}
        className={styles.searchFilterInput}
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
export default React.memo(SearchFilter);
