const express = require("express");

const { getAllBooks, createBook, deleteBook } = require("../controllers/booksController");

const router = express.Router();

router.route("/").get(getAllBooks).post(createBook);
router.route("/delete/:id").get(deleteBook);

module.exports = router;
