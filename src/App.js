import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/about.page";
import Contact from "./component/contact.page";
import Homepage from "./component/homepage.page";
import ErrorPage from "./component/404.page";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="home" element={<Homepage />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
