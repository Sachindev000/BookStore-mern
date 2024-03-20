const router = require("express").Router();
const bookModel = require("../models/booksModel");

// POST request to add a new book
router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newBook = new bookModel(data);
    await newBook.save();
    res.status(200).json({ message: "Book added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// GET request to fetch all books
router.get("/getBooks", async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json({ books });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// GET request to fetch a book by its ID
router.get("/getBooks/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const book = await bookModel.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ book });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// PUT request to update a book by its ID
router.put("/updateBook/:id", async (req, res) => {
  const { image, title, author, description, price } = req.body;
  const id = req.params.id;
  try {
    const book = await bookModel.findByIdAndUpdate(id, {
      image,
      title,
      author,
      description,
      price,
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Data Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// DELETE request to delete a book by its ID
router.delete("/deleteBook/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await bookModel.findByIdAndDelete(id);
    res.status(201).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
