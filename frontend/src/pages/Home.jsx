import React, { useContext } from "react";
import banner from "../assets/bannerhome.png";
import { Link } from "react-router-dom";
import { AppContext } from "../context/BookContext";
import FadeLoader from "react-spinners/FadeLoader";

const Home = () => {
  const { loading } = useContext(AppContext);
  return (
    <>
      <div className="container w-[100%] ] border mt-5 ">
        <div className="grid grid-cols sm:w-full lg:grid-cols-2 justify-items-center items-center">
          <div className="  flex justify-center items-start flex-col">
            <h2 className="text-[90px]">Book Store Is Here!</h2>
            <Link to={"/books"}>
              <button className="border bg-indigo-950 text-white p-2 font-semibold ">
                View Books
              </button>
            </Link>
          </div>

          <div className="hidden md:hidden lg:flex p-5">
            <img src={banner} className="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
