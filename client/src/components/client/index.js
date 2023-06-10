import React from "react";
import Navbar from "./navbar";
import Books from "./books";
import Footer from "./footer";
export default function Index() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Books />
        <div className="mt-3">
          <Footer />
        </div>
      </div>
    </div>
  );
}
