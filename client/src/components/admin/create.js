import React from "react";
import Navbar from "./navbar";
import swal from "sweetalert";

export default function Create() {
  const [bookData, setBookData] = React.useState({
    title: "",
    author: "",
    description: "",
    price: "",
    category: "",
    published_date: "",
    isbn: "",
    publisher: "",
    language: "",
    pages: "",
    format: "",
    available: "",
    discount: "",
    quantity: "",
  });

  function createBook() {
    const finalData = {
      title: bookData.title,
      auther: bookData.author,
      description: bookData.description,
      price: bookData.price,
      category: bookData.category,
      publication_date: bookData.published_date,
      isbn: bookData.isbn,
      publisher: bookData.publisher,
      language: bookData.language,
      pages: bookData.pages,
      format: bookData.format,
      availability: bookData.available,
      discount: bookData.discount,
      quantity: bookData.quantity,
    };

    fetch("http://localhost:5000/createbooks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal("Book Created", "Book has been created successfully", "success");
      })
      .catch((err) => {
        console.log(err);
        swal("Error", "Something went wrong", "error");
      });
  }

  return (
    <div>
      <Navbar />

      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  title: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              onChange={(e) => {
                setBookData({
                  ...bookData,
                  author: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows={5}
              onChange={(e) => {
                setBookData({
                  ...bookData,
                  description: e.target.value,
                });
              }}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              onChange={(e) => {
                setBookData({
                  ...bookData,
                  price: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              onChange={(e) => {
                setBookData({
                  ...bookData,
                  category: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="published">Published Date</label>
            <input
              type="date"
              className="form-control"
              id="published"
              onChange={(e) => {
                setBookData({
                  ...bookData,
                  published_date: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="isbn">ISBN</label>
            <input
              type="text"
              className="form-control"
              id="isbn"
              onChange={(e) => {
                setBookData({
                  ...bookData,
                  isbn: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="publisher">Publisher</label>
            <input
              type="text"
              className="form-control"
              id="publisher"
              onChange={(e) => {
                setBookData({
                  ...bookData,
                  publisher: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="language">Language</label>
            <input
              type="text"
              className="form-control"
              id="language"
              onChange={(e) => {
                setBookData({
                  ...bookData,
                  language: e.target.value,
                });
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pages">Pages</label>
            <input
              type="number"
              className="form-control"
              id="pages"
              onChange={(e) => {
                setBookData({
                  ...bookData,
                  pages: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edition">Format</label>
            <input
              type="text"
              className="form-control"
              id="format"
              onChange={(e) => {
                setBookData({
                  ...bookData,
                  format: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="available">Available</label>
            <input
              type="text"
              className="form-control"
              id="available"
              onChange={(e) => {
                setBookData({
                  ...bookData,
                  available: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="discount">Discount</label>
            <input
              type="number"
              className="form-control"
              id="discount"
              onChange={(e) => {
                setBookData({
                  ...bookData,
                  discount: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              onChange={(e) => {
                setBookData({
                  ...bookData,
                  quantity: e.target.value,
                });
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success mt-2 mb-5 w-50"
            onClick={(e) => {
              e.preventDefault();
              createBook();
            }}
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
}
