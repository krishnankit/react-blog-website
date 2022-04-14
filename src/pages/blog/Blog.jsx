import "./singleblog.css";
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import {db} from "../../firebaseconfig";
import {collection, query, onSnapshot} from "firebase/firestore";
import Footer from "../../components/footer/Footer";

const Blog = () => {
  const {id} = useParams();

  const [blog, setBlog] = useState();

  useState(() => {
    const q = query(collection(db, 'blogs'))
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach(doc => {
        if (doc.id == id) {
          setBlog(doc.data());
        }
      })
    })
  }, [])
  return (
    <div className="blog-page">
      <Navbar />
      <div className="blog-container">
        <h1 className="single-title">{blog.title}</h1>
        <p className="single-author"> - by {blog.author}</p>
        <div className="introduction">
          <div className="single-image">
            <img src={blog.img} alt="Image" />
          </div>
          <div className="single-description">
            <p>{blog.description}</p>
          </div>
        </div>
        <div className="single-content">
          <p>{blog.content}</p>
        </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default Blog