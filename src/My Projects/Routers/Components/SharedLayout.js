import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import StyledNavbar from "D:/web-live/webb/src/Components/StyledNavbar.js";
// D:\web-live\webb\src\Components\StyledNavbar.js
const Home = () => {
  return (
    <>
      <div className="text-center m-10 p-10 mr-20 text-2xl font-bold">
        <StyledNavbar />
        <Outlet />
      </div>
    </>
  );
};
export default Home;
