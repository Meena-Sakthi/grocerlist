// import ColorGenerator from "./My Projects/DisplayPara/ColorGenerator/ColorGenerator";
// import RefForms from "./My Projects/DisplayPara/ColorGenerator/Forms/RefForms";
// import Index from "./My Projects/UseMemo/Index";

// function App() {
//   return (
//     <div>
//       <Index />

//     </div>
//   );
// }

// export default App;
////////////////////////////////////////
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider, createBrowserRouter, Switch } from "react-router-dom";
// // import pages
// import Home from "./My Projects/CockTail/Pages/Home";
// import About from "./My Projects/CockTail/Pages/About";
// import SingleCocktail from "./My Projects/CockTail/Pages/SingleCocktail";
// import Error from "./My Projects/CockTail/Pages/Error";
// // import components
// import Navbar from "./My Projects/CockTail/Components/Navbar";
// function App() {
//   return <h2>app component</h2>;

//   const appRouter = createBrowserRouter([
//     { path: "/", element: <App /> },
//     {
//       path: "/home",
//       element: <Home />,
//     },
//     { path: "/about", element: <About /> },
//   ]);
//   const root = ReactDOM.createRoot(document.getElementById("root"));
// }
// root.render(<RouterProvider router={appRouter} />);

// export default App;
//////////////////////////
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
