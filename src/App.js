import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./component/about.page";
import Contact from "./component/contact.page";
import Homepage from "./component/homepage.page";
import ErrorPage from "./component/404.page";
import BookDetails from "./component/BookDetails";
import Icons from "./component/icon.page";
import "./App.css";

// Routes --> window.location
// Route --> window.location.href

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="icons" element={<Icons />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>

        {/* Nested Routing */}
        <Route path="books">
          <Route index element={<>Books</>} />
          <Route path=":id/:author" element={<BookDetails />} />
          <Route path="books/sell" element={<>Sell a Book</>} />
        </Route>
      </Routes>

      <div>Copyright &copy;&copy; {new Date().getFullYear()}</div>
    </div>
  );
};

export default App;

// Dynamic Routing --> Path can change
