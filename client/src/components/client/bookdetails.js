import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "./navbar";

export default function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/getbook/${bookId}`);
        const data = await response.json();
        setBook(data.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [bookId]);

  // Fetch book details based on bookId and display them

  if (!book) {
    window.location.href = "/";
  } else {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>{book.title}</h2>
              <h5>{book.author}</h5>
              <p>{book.description}</p>
              <p>
                <strong>Price: {"$"} </strong>
                {book.price}
              </p>
              <p>
                <strong>Category: </strong>
                {book.category}
              </p>
              <p>
                <strong>Published Date: </strong>
                {book.publication_date}
              </p>
              <p>
                <strong>ISBN: </strong>
                {book.isbn}
              </p>
              <p>
                <strong>Publisher: </strong>
                {book.publisher}
              </p>
              <p>
                <strong>Language: </strong>
                {book.language}
              </p>
              <p>
                <strong>Pages: </strong>
                {book.pages}
              </p>
              <p>
                <strong>Format: </strong>
                {book.format}
              </p>
              <p>
                <strong>Availability: </strong>
                {book.availability}
              </p>
              <p>
                <strong>Discount: </strong>
                {book.discount}
              </p>
              <p>
                <strong>Quantity: </strong>
                {book.quantity}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
