import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { BASE_URL } from "../../urls";


export const AppContext = createContext();

const BookContext = ({ children }) => {
  // State
  const [bookdata, setBookData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // Effects (loading)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

   // Effects (fetch data)
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/getBooks`);
        setBookData(res.data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBook();
  }, []);

  // Delete Functions
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${BASE_URL}/deleteBook/${id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          })
          .catch((error) => {
            console.error("Error deleting book:", error);
            alert("Failed to delete book. Please try again later.");
          });
      }
    });
  };
 // Search Functions
  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setBookData(bookdata);
    } else {
      const filteredBook = bookdata.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setBookData(filteredBook);
      if (filteredBook.length === 0) {
        toast.warn("No search results found");
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        bookdata,
        setBookData,
        handleSearch,
        setSearch,
        search,
        loading,
        setLoading,
        handleDelete,
        toast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default BookContext;
