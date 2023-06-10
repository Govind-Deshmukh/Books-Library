import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import swal from "sweetalert";
export default function Index() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState({
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

  const [updateBookData, setUpdateBook] = useState({
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/getbooks");
        const data = await response.json();
        setBooks(data.data);
      } catch (error) {
        // Handle error if the fetch request fails
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function updateBook(bookId) {
    fetch(`http://localhost:5000/getbook/${bookId}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedBook(data.data);
      })
      .then(() => {
        // data-toggle="modal"
        // data-target="#exampleModal"
        const modal = document.getElementById("exampleModal");
        const bootstrapModal = new window.bootstrap.Modal(modal);
        bootstrapModal.show();
      });
  }

  function finalUpdateBook(bookid) {
    const finalData = {
      title: updateBookData.title,
      auther: updateBookData.author,
      description: updateBookData.description,
      price: updateBookData.price,
      category: updateBookData.category,
      publication_date: updateBookData.published_date,
      isbn: updateBookData.isbn,
      publisher: updateBookData.publisher,
      language: updateBookData.language,
      pages: updateBookData.pages,
      format: updateBookData.format,
      availability: updateBookData.available,
      discount: updateBookData.discount,
      quantity: updateBookData.quantity,
    };
    fetch(`http://localhost:5000/updatebook/${bookid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          swal("Book updated successfully", {
            icon: "success",
          }).then(() => {
            window.location.reload();
            const modal = document.getElementById("exampleModal");
            const bootstrapModal = new window.bootstrap.Modal(modal);
            bootstrapModal.hide();
          });
        } else {
          swal("Oops! Something went wrong", {
            icon: "error",
          });
        }
      });
  }

  function deleteBook(bookId) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this book!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/deletebook/${bookId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.status === 200) {
              swal("Poof! Your book has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Oops! Something went wrong", {
                icon: "error",
              });
            }
          });
      } else {
        swal("Your book is safe!");
      }
    });
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        {books.length > 0 ? (
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Book ID</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book._id}>
                  <td>{book._id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>
                  <td>{book.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger m-1"
                      onClick={(e) => {
                        e.preventDefault();
                        deleteBook(book._id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-info m-1"
                      onClick={(e) => {
                        e.preventDefault();
                        updateBook(book._id);
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No books found.</p>
        )}
      </div>

      {selectedBook ? (
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update Book Details
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder={selectedBook.title}
                      onChange={(e) =>
                        setUpdateBook({
                          ...updateBookData,
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
                      placeholder={selectedBook.author}
                      onChange={(e) => {
                        setUpdateBook({
                          ...updateBookData,
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
                      placeholder={selectedBook.description}
                      rows={5}
                      onChange={(e) => {
                        setUpdateBook({
                          ...updateBookData,
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
                      placeholder={selectedBook.price}
                      onChange={(e) => {
                        setUpdateBook({
                          ...updateBookData,
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
                      placeholder={selectedBook.category}
                      onChange={(e) => {
                        setUpdateBook({
                          ...updateBookData,
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
                      // placeholder={selectedBook.publication_date}
                      placeholder={selectedBook.publication_date}
                      onChange={(e) => {
                        setUpdateBook({
                          ...updateBookData,
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
                      placeholder={selectedBook.isbn}
                      onChange={(e) => {
                        setUpdateBook({
                          ...updateBookData,
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
                      placeholder={selectedBook.publisher}
                      onChange={(e) => {
                        setUpdateBook({
                          ...updateBookData,
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
                      placeholder={selectedBook.language}
                      onChange={(e) => {
                        setUpdateBook({
                          ...updateBookData,
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
                      placeholder={selectedBook.pages}
                      onChange={(e) => {
                        setUpdateBook({
                          ...updateBookData,
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
                      placeholder={selectedBook.format}
                      onChange={(e) => {
                        setUpdateBook({
                          ...updateBookData,
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
                      placeholder={selectedBook.availability}
                      onChange={(e) => {
                        setUpdateBook({
                          ...updateBookData,
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
                      placeholder={selectedBook.discount}
                      onChange={(e) => {
                        setUpdateBook({
                          ...updateBookData,
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
                      placeholder={selectedBook.quantity}
                      onChange={(e) => {
                        setUpdateBook({
                          ...updateBookData,
                          quantity: e.target.value,
                        });
                      }}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    finalUpdateBook(selectedBook._id);
                  }}
                >
                  Update Book
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
