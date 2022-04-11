import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Blogs from "./pages/blogs/Blogs";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/allblogs" element={<Blogs />}></Route>
        <Route path="/blog/:id" element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
