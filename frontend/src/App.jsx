import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Books from "./pages/Books";
import AddBooks from "./pages/AddBooks";
import UpdateBook from "./pages/UpdateBook";
import BookDetails from "./pages/BookDetails";

import FadeLoader from "react-spinners/FadeLoader";
import { AppContext } from "./context/BookContext";

const App = () => {
  const { loading } = useContext(AppContext);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center mt-2">
          <FadeLoader color="#4b0082" />
        </div>
      ) : (
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/addBooks" element={<AddBooks />} />
            <Route path="getBooks/:id" element={<UpdateBook />} />
            <Route path="getBooks/:id" element={<UpdateBook />} />
            <Route path="bookdetails/:id" element={<BookDetails />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
