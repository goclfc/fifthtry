export const getSection1 = () => {
    return fetch("http://localhost:3000/section").then((data) => data.json());
  };
  