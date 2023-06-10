import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/getbooks");
        const data = await response.json();
        setBooks(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter books based on the search term
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <h1 className="text-center">Search for Books</h1>
      <div className="d-flex justify-content-center ">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search books"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="container">
        <hr />
        <div className="row p-3">
          {filteredBooks.map((book) => (
            <div className="col-md-4" key={book._id.$oid}>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{book.title}</strong>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {book.author}
                  </h6>
                  <p className="card-text">{book.description}</p>

                  <Link to={`/books/${book._id}`} className="btn btn-primary">
                    More Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
