import React from "react";
import "../App";
import { useContext } from "react";
import { Appcontext } from "./context/context";

const Favorite = () => {
  const { addtofav, removefav, favorites } = useContext(Appcontext);
  const favcheck = (id) => {
    const boalean = favorites.some((book) => book.id === id);
    return boalean;
  };
  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((book) => {
          return (
            <div key={book.id} className="book">
              <div>
                <h3>{book.title}</h3>
              </div>
              <div>
                <img src={book.image_url} alt="#" />
              </div>
              {favcheck(book.id) ? (
                <button
                  onClick={() => {
                    removefav(book.id);
                  }}
                >
                  Remove from fav
                </button>
              ) : (
                <button
                  onClick={() => {
                    addtofav(book);
                  }}
                >
                  Add to fav
                </button>
              )}
            </div>
          );
        })
      ) : (
        <div
         style={{fontSize:"30px"}}
        >
          You Have no favorites
        </div>
      )}
    </div>
  );
};

export default Favorite;
