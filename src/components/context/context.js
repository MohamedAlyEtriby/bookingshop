import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import React from "react";
export const Appcontext = createContext();
const AppcontextProvider = ({ children }) => {
  const [favorites, setfavorites] = useState([]);
  useEffect(() => {
    console.log(favorites);
  }, [favorites]);
  const addtofav = (book) => {
    setfavorites([...favorites, book]);
  };

  const removefav = (id) => {
    const newfavorites = favorites.filter((item) => item.id !== id);
    setfavorites(newfavorites);
  };

  return (
    <Appcontext.Provider value={{ addtofav, favorites, removefav }}>
      {children}
    </Appcontext.Provider>
  );
};
export default AppcontextProvider;
