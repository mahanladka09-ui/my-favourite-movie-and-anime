// server.js
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Load reviews
let reviews = JSON.parse(fs.readFileSync("reviews.json", "utf-8"));

// Get all reviews
app.get("/api/reviews", (req, res) => {
  res.json(reviews);
});

// Add a new review
app.post("/api/reviews", (req, res) => {
  const { name, category, review, rating } = req.body;

  if (!name || !category || !review || !rating) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const newReview = {
    id: reviews.length + 1,
    name,
    category,
    review,
    rating,
    date: new Date().toISOString()
  };

  reviews.push(newReview);
  fs.writeFileSync("reviews.json", JSON.stringify(reviews, null, 2));

  res.status(201).json({ message: "Review added successfully!", newReview });
});

app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
