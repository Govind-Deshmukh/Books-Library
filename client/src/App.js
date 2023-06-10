import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/client/index";
import Admin from "./components/admin/index";
import Create from "./components/admin/create";
import BookDetails from "./components/client/bookdetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/create" element={<Create />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
