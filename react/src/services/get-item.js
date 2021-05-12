export const getItems = () => {
  return fetch("http://localhost:3000/items").then((data) => data.json());
};
