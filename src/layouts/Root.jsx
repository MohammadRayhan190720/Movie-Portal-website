import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="text-text font-Nunito ">
        <Navbar></Navbar>
      {/* <div className="max-w-7xl mx-auto"> */}
        <Outlet></Outlet>
      {/* </div> */}
        <Footer></Footer>
    </div>
  );
};

export default Root;