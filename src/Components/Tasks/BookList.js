import React from "react";
import { books } from "./utils/constants";
import Book from "./Book";

const BookList = () => {
  return (
    <div>
      <section className="w-full h-20 bg-teal-100 rounded-md pt-3">
        <h1 className="text-center text-black text-2xl  font-bold">
          Amazon BestSellers
        </h1>
        <h1 className="text-center text-black text-l font-serif font-bold">
          Our most poupular products,based on Sales.Frequently updated!!!!
        </h1>
      </section>

      <div className="flex m-auto flex-wrap gap-5 items-center ">
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
