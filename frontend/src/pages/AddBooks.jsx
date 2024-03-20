import axios from "axios";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {BASE_URL} from '../../urls'

const AddBooks = () => {
  // State
  const navigate = useNavigate();
  const [newBook, setNewBook] = useState({
    image: "",
    title: "",
    author: "",
    description: "",
    price: "",
  });

  // Event Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/add`, newBook);
      navigate("/books");
      toast.success("Added Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      setNewBook({
        image: "",
        title: "",
        author: "",
        description: "",
        price: "",
      });
    } catch (error) {
      console.error("Error adding book:", error);
      toast.error("Failed to add book. Please try again later.");
    }
  };

  return (
    <>
      <div className="">
        <h3 className="text-center mt-2 font-bold text-indigo-900 text-4xl underline">
          Add Book
        </h3>
        <Form className="container mt-5 border font-bold text-lg text-indigo-900">
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label className="p-2 ml-2">Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Paste Book Image Url"
              name="image"
              value={newBook.image}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="p-2 ml-2">Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Book Title"
              name="title"
              value={newBook.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="p-2 ml-2">Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Author Name"
              name="author"
              value={newBook.author}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="p-2 ml-2">Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Book description"
              name="description"
              value={newBook.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="p-2 ml-2">Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Book Price"
              name="price"
              value={newBook.price}
              onChange={handleChange}
            />
          </Form.Group>
          <button
            onClick={handleSubmit}
            className="border p-2 w-full bg-indigo-900 text-white font-bold hover:bg-indigo-800"
          >
            Add Book
          </button>
        </Form>
        ' '
      </div>
    </>
  );
};

export default AddBooks;
