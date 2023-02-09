import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Bookdetails = () => {
  const { id } = useParams();
  const [book, setbook] = useState({});
  useEffect(() => {
    axios
      .get(`https://example-data.draftbit.com/books/${id}`)
      .then((res) => {
        setbook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="book-details">
      <div>
        <h2>{book.title}</h2>
        <img src={book.image_url} alt="" />
      </div>
      <div className="details">
        <h2> Description</h2>
        <p>{book?.description}</p>
        <h2>Authors</h2>
        <p>{book?.authors}</p>
        <h2>Genres</h2>
        <p>{book?.genres}</p>
        <h2>Rating</h2>
        <p>{book?.rating}</p>
      </div>
    </div>
  );
};

export default Bookdetails;
