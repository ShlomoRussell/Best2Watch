import { createContext, useEffect, useState } from "react";

const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:3001/api/movies").then(res=>res.json()).then((res) => {
        setData(res);
      });
    }
    fetchData();
  }, []);
  const { Provider } = MoviesContext;
  return <Provider value={data}>{children}</Provider>;
};

export { MoviesContext };
