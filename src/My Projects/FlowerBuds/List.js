//Reference for getLocalStorage
////https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="w-4/6 text-center bg-gray-100 shadow-md  flex flex-col">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article
            className="p-2 w-12/12  text-center border-slate-300 bg-slate-100 rounded-lg  flex flex-row justify-evenly"
            key={id}
          >
            <p className="text-xl font-bold">{title}</p>
            {/* <div className=""> */}
            <button
              type="button"
              className="bg-blue-500 p-1 m-1 rounded "
              onClick={() => editItem(id)}
            >
              <FaEdit />
            </button>
            <button
              type="button"
              className="bg-red-500 p-1 m-1 rounded"
              onClick={() => removeItem(id)}
            >
              <FaTrash />
            </button>
            {/* </div> */}
          </article>
        );
      })}
    </div>
  );
};

export default List;
