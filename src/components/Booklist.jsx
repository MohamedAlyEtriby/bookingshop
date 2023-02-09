import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "../App";
import { API_URL } from "../Api";
import axios from "axios";
import { Appcontext } from "./context/context";
import { useNavigate } from "react-router-dom";
const Booklist = () => {
  const [Books, setBooks] = useState([]);

  const { addtofav, removefav, favorites } = useContext(Appcontext);

  const navigate = useNavigate();

  const favcheck = (id) => {
    const boalean = favorites.some((book) => book.id === id);
    return boalean;
  };
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setBooks(res.data);
        console.log(res.data)
        Books.forEach((Book) => {
        });
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="booklist">
      {Books.map((book) => {
        return (
          <div key={book.id} className="book" style={{cursor:"pointer"}}>
            <div>
              <h3>{book.title}</h3>
            </div>
            <div>
              <img
                src={book.image_url}
                alt="#"
                onClick={() => {
                  navigate(`/book/${book.id}`);
                }}
              />
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
      })}
    </div>
  );
};

export default Booklist;
