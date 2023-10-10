const express = require("express");

const bookRouter = express.Router();

let books = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fiction",
    price: 78.9,
  },
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    genre: "Fiction",
    price: 99.99,
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
  books = books.filter((book) => book.id !== parseInt(req.params.id));
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
bookRouter.post("/", (req, res) => {
  const bookReq = req.body.book;
  const index = books.findIndex((book) => book.id === bookReq.id);
  if (index > -1) {
    return res.json({ message: "数据已存在" });
  } else {
    const book = { ...bookReq, id: books[books.length - 1].id + 1 };
    books.push(book);
    return res.json(book);
  }
});

module.exports = bookRouter;
