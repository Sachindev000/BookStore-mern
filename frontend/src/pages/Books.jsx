import React, { useContext } from "react";
import { AppContext } from "../context/BookContext";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Books = () => {
  // Hooks
  const { bookdata, search, handleSearch, handleDelete } =
    useContext(AppContext);

  return (
    <div className="container">
      <h2 className="text-center mt-2 font-bold text-indigo-950 underline">
        Book Section
      </h2>
      <Form className="d-flex">
        <Form.Control
          type="search"
          value={search}
          placeholder="Search Book..."
          className="me-2"
          aria-label="Search"
          onChange={handleSearch}
        />
      </Form>
      <div className="grid grid-cols sm:w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center items-center">
        {bookdata.map((data) => (
          <Card style={{ width: "15rem" }} className="mt-5" key={data._id}>
            <Card.Img className="h-60" variant="top" src={data.image} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>₹{data.price}</Card.Text>
              <div className="flex justify-between">
                <Link to={`/getBooks/${data._id}`}>
                  <button className="border p-1 w-12">✏️</button>
                </Link>
                <Link to={`/bookdetails/${data._id}`}>
                  <button className="border p-1 w-12">👁️</button>
                </Link>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="border p-1 w-16"
                >
                  ❌
                </button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Books;
