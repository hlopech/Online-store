export const FILTERS_CONFIGURATION = {
  color: {
    type: "multiselect",
    name: "Color",
    defaultValue: [],
    fn: (p, activeValue) =>
      !activeValue.length || activeValue.includes(p.color),
  },
  category: {
    type: "multiselect",
    name: "Caterogy",
    defaultValue: [],
    fn: (p, activeValue) =>
      !activeValue.length || activeValue.includes(p.category),
  },
  string: {
    type: "search",
    name: "Search",
    defaultValue: "",
    fn: (p, activeValue) =>
      p.name.toLowerCase().includes(activeValue.toLowerCase()),
  },
};
