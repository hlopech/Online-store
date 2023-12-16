import { sortFunctions } from "./sortsFunctions";

export const SortAndFilter = (arr, filters, activeSort) => {
  const filtered = arr.filter((p) =>
    filters.every((f) => f.fn(p, f.defaultValue))
  );
  if (sortFunctions[activeSort]) {
    sortFunctions[activeSort](filtered);
  }

  return filtered;
};
