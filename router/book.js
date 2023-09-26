const express = require("express");

const bookRouter = express.Router();

const books = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fiction",
  },
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    genre: "Fiction",
  },
];

const findBookById = (id) => {
  return books.find((book) => book.id === parseInt(id));
};

bookRouter.get("/", (req, res) => {
  return res.json(books);
});

bookRouter.get("/:id", (req, res) => {
  return res.json(findBookById(req.params.id));
});

bookRouter.delete("/:id", (req, res) => {
  const book = findBookById(req.params.id);
  return res.json(book);
});

bookRouter.put("/", (req, res) => {
  const bookReq = req.body.book;
  const index = books.findIndex((book) => book.id === bookReq.id);

  if (index > -1) {
    books[index] = bookReq;
    return res.json(books[index]);
  } else {
    return res.json(null);
  }
});

module.exports = bookRouter;
