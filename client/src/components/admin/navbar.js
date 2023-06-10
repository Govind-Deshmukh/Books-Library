import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="container mt-2 mb-3 navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <Link className="navbar-brand" to="/admin">
          BookStore Admin
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Shop
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/admin">
                AdminHome
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/create">
                Create Book
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
