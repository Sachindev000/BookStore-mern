import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Modal from "react-bootstrap/Modal";
import { BASE_URL } from "../../urls";

const BookDetails = () => {
  // State
  const { id } = useParams();
  const [lgShow, setLgShow] = useState(false);
  const [updateBook, setUpdateBook] = useState({
    image: "",
    title: "",
    author: "",
    description: "",
    price: "",
  });

  // Effects
  useEffect(() => {
    axios
      .get(`${BASE_URL}/getBooks/${id}`)
      .then((res) => {
        const bookData = res.data.book;
        if (bookData) {
          const { image, title, author, description, price } = bookData;
          setUpdateBook({
            image,
            title,
            author,
            description,
            price,
          });
        } else {
          console.error("Incomplete book data received:", res.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching book:", error);
      });
  }, [id]);

  return (
    <>
      <div className="font-[sans-serif]">
        <div>
          <div className="grid items-center justify-center h-[90vh] grid-cols lg:grid-cols-2">
            <div className=" grid grid-cols  justify-center">
              <div className="columns-2 grid mt-2 md:mt-3 lg:mt-0">
                <div className="h-[500px] w-[350px]">
                  <img
                    src={updateBook.image}
                    alt="Product"
                    className="w-full h-full object-cover object-top shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="px-10 py-6 max-lg:max-w-2xl md:max-w-full">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-800">
                  {updateBook.title}
                </h2>
              </div>
              <div className="mt-8">
                <p className="text-gray-800 text-3xl font-bold">
                  {updateBook.price}₹
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <button
                  type="button"
                  onClick={() => setLgShow(true)}
                  className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold rounded"
                >
                  Read Summary
                </button>
                <Modal
                  size="lg"
                  show={lgShow}
                  onHide={() => setLgShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg ">
                      {updateBook.title} summary📖
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{updateBook.description}</Modal.Body>
                </Modal>
              </div>
              <div className="mt-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    Book Description
                  </h3>
                  <p className="text-sm text-gray-800 mt-4">
                    {updateBook.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
