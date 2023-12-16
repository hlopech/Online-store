export const generateProducts = (n) => {
  const products = [];
  for (let i = 0; i < n; i++) {
    products.push(generateProduct());
  }

  return products;
};

const generateProduct = () => ({
  id: crypto.randomUUID(),
  name: generateRandomString(),
  description: getRandomSentence(),
  color: generateRandomColor(),
  category: generateRandomCategory(),
  price: generateRandomPrice(),
  rating: genetateRandomRating(),
  imageUrl: getRandomImage(),
});

const generateRandomString = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  let length = Math.floor(Math.random() * (8 - 4 + 1) + 4);
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};

const getRandomSentence = () => {
  let string = "";
  const length = Math.floor(Math.random() * (10 - 4 + 1) + 4);
  for (let i = 0; i < length; i++) {
    const word = generateRandomString();
    string += " " + word;
  }
  return string;
};

const generateRandomColor = () => {
  const COLORS = ["white", "black", "yellow", "red", "blue"];

  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

const generateRandomCategory = () => {
  const CATEROGY = [
    "shoes",
    "socks",
    "jeans",
    "shorts",
    "T-shirts",
    "hoodies",
    "shirts",
    "jackets",
    "hats",
    "accessories",
  ];
  return CATEROGY[Math.floor(Math.random() * CATEROGY.length)];
};
const generateRandomPrice = () => {
  return Math.floor(Math.random() * (9999 - 10 + 1)) + 10;
};
const genetateRandomRating = () => {
  return Math.round(Math.random() * 50) / 10;
};

const getRandomImage = () => {
  return "/images/" + Math.floor(Math.random() * 20 + 1) + ".png";
};
