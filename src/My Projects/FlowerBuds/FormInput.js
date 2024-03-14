import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
function FormInput() {
  const [groceryName, setGroceryName] = useState("");
  const [list, setList] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  // const [btn, setBtn] = useState("Edit");
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!groceryName) {
      showAlert(true, "red", "Please enter value");
    } else if (groceryName && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: groceryName };
          }
          return item;
        })
      );
      setGroceryName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "green", "Value changed successfully");
    } else {
      showAlert(true, "green", "Item added to the list");
      const newItem = {
        id: new Date().getTime().toString(),
        title: groceryName,
      };

      setList([...list, newItem]);
      setGroceryName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "red", "List is empty !!");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "red", "Item removed successfully !!");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setGroceryName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <article className="w-4/12 m-auto ">
      <h3 className="text-center bg-slate-800 text-orange-500  text-xl mt-10 w-3/12 m-auto px-1 font-bold rounded">
        Grocery List
      </h3>
      <form
        className="p-5 m-5 border-slate-300 bg-slate-100 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <div className="">
          <input
            type="text"
            className="p-2 m-2 w-3/4 border-2 border-black rounded-md"
            placeholder="Eg.Atta"
            value={groceryName}
            onChange={(e) => setGroceryName(e.target.value)}
          />
          <button
            type="submit"
            className="ml-4 px-1 bg-blue-400 text-l font-bold rounded-md"
          >
            {isEditing ? "Edit/Save" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="w-10/12 ml-32">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button
            className="  mt-10 ml-16 px-2 bg-black text-white text-xl font-bold rounded-md"
            onClick={clearList}
          >
            Clear items
          </button>
        </div>
      )}
    </article>
  );
}

export default FormInput;
