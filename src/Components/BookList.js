import React from "react";
import Books from "./Books";
import { books } from "../utils/constants";

const BookList = () => {
  return (
    <section className="flex">
      {books.map((book, index) => {
        const { image, title, author, type, rating, price } = book;
        return <Books key={index} book={book} />;
      })}
    </section>
  );
};

export default BookList;
