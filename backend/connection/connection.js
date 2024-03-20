const mongoose = require("mongoose");

// MongoDB connection URL
const mongoURI =
  "mongodb+srv://sachindev0507:Rb7sUo5rYKRumunW@book-store-mern.7ihgmnm.mongodb.net/?retryWrites=true&w=majority&appName=Book-Store-Mern";

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
