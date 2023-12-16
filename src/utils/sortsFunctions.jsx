export const sortFunctions = {
    "First Popular": (arr) => arr.sort((a, b) => b.rating - a.rating),
    "First Expensive": (arr) => arr.sort((a, b) => b.price - a.price),
    "First Cheap": (arr) => arr.sort((a, b) => a.price - b.price),
  };