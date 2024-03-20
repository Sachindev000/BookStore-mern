import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { BASE_URL } from "../../urls";

const UpdateBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [updateBook, setUpdateBook] = useState({
    image: "",
    title: "",
    author: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/getBooks/${id}`)
      .then((res) => {
        const bookData = res.data.book;
        if (bookData) {
          const { image, title, author, description, price } = bookData;
          setUpdateBook({ image, title, author, description, price });
        } else {
          console.error("Incomplete book data received:", res.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching book:", error);
      });
  }, [id]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdateBook({ ...updateBook, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const data = {
      image: updateBook.image,
      title: updateBook.title,
      author: updateBook.author,
      description: updateBook.description,
      price: updateBook.price,
    };

    axios
      .put(`${BASE_URL}/updateBook/${id}`, data)
      .then(() => {
        navigate("/books");
        toast.success("Updated Successfully");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <h3 className="text-center mt-2 font-bold text-indigo-900 text-4xl underline">
        Update Book
      </h3>
      <Form className="container mt-5 border font-bold text-lg text-indigo-900">
        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
          <Form.Label className="p-2 ml-2">Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Paste Book Image Url"
            name="image"
            value={updateBook.image}
            onChange={handleEditChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="p-2 ml-2">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Title"
            name="title"
            value={updateBook.title}
            onChange={handleEditChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="p-2 ml-2">Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author Name"
            name="author"
            value={updateBook.author}
            onChange={handleEditChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="p-2 ml-2">Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book description"
            name="description"
            value={updateBook.description}
            onChange={handleEditChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="p-2 ml-2">Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Book Price"
            name="price"
            value={updateBook.price}
            onChange={handleEditChange}
          />
        </Form.Group>
        <button
          onClick={handleEditSubmit}
          className="border p-2 w-full bg-indigo-900 text-white font-bold hover:bg-indigo-800"
        >
          Update Book
        </button>
      </Form>
    </div>
  );
};

export default UpdateBook;
