import React, { useState, useEffect, useMemo } from "react";
import Filter from "../Filter/Filter";
import Product from "../Product/Product";
import SearchFilter from "../SearchFilter/SearchFilter";
import SortingButtons from "../SortingButtons/SortingButtons";
import styles from "./MainPage.module.css";
import { generateProducts } from "../utils/generateProducts";
import { SortAndFilter } from "../utils/SortAndFilter";
import { FILTERS_CONFIGURATION } from "../utils/filterConfig";
const SORT_TYPES = ["First Popular", "First Expensive", "First Cheap"];

function MainPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(generateProducts(20));
  }, []);

  const [activeFilters, setActiveFilters] = useState({
    color: FILTERS_CONFIGURATION.color,
    category: FILTERS_CONFIGURATION.category,
    string: FILTERS_CONFIGURATION.string,
  });
  const [activeSort, setActiveSort] = useState("First Popular");

  const possibleFilterArr = useMemo(() => {
    const colors = Array.from(new Set(products.map((p) => p.color)));
    const categories = Array.from(new Set(products.map((p) => p.category)));

    return { color: colors, category: categories };
  }, [products]);

  const visitableProducts = SortAndFilter(
    products,
    Object.values(activeFilters),
    activeSort
  );

  return (
    <div className={styles.mainContainer}>
      <div className={styles.sortingAndSearchFilter}>
        <SearchFilter
          onSetActiveString={(value) =>
            setActiveFilters((prev) => ({
              ...prev,
              string: {
                ...prev.string,
                defaultValue: value,
              },
            }))
          }
        />
        <SortingButtons
          sortTypesArray={SORT_TYPES}
          onSetSortType={setActiveSort}
        />
      </div>

      <div className={styles.container_1}>
        <div className={styles.filters}>
          {Object.keys(FILTERS_CONFIGURATION)
            .filter((key) => FILTERS_CONFIGURATION[key].type !== "search")
            .map((key) => (
              <Filter
                key={key}
                possibleFilterArr={possibleFilterArr[key]}
                typeOfFilter={FILTERS_CONFIGURATION[key].name}
                onAddAttribute={(value) =>
                  setActiveFilters((prev) => ({
                    ...prev,
                    [key]: {
                      ...prev[key],
                      defaultValue: value,
                    },
                  }))
                }
              />
            ))}
        </div>
        <div className={styles.productsContainer}>
          <span
            className={
              visitableProducts.length !== 0 ? styles.emty : styles.notemty
            }
          >
            No results were found for your request
          </span>
          {visitableProducts.map((p) => (
            <Product product={p} key={p.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(MainPage);
