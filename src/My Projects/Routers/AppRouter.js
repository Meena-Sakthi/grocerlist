import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./My Projects/Routers/Pages/Home";
import About from "./My Projects/Routers/Pages/About";
import Error from "./My Projects/Routers/Pages/Error";
import Products from "./My Projects/Routers/Pages/Products";
import Navbar from "./Components/Navbar";
import SharedLayout from "./My Projects/Routers/Components/SharedLayout";
import SingleProduct from "./My Projects/Routers/Components/SingleProduct";
import Dashboard from "./My Projects/Routers/Pages/Dashboard";
import Login from "./My Projects/Routers/Pages/Login";
import ProtectedRoute from "./My Projects/CockTail/Pages/ProtectedRoute";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute user={user}>
                  <Dashboard user={user} />{" "}
                </ProtectedRoute>
              }
            />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<SingleProduct />} />
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
