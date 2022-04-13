import "./singleblog.css";
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import {db} from "../../firebaseconfig";
import {collection, query, onSnapshot, getDocs} from "firebase/firestore";

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
    <div className="blog">
      <Navbar />
      <div className="blog-container">
        <h1 className="title">{blog.title}</h1>
        <p className="author"> - by {blog.author}</p>
        <div className="introduction">
          <div className="image">
            <img src={blog.img} alt="Image" />
          </div>
          <div className="description">
            <p>{blog.description}</p>
          </div>
        </div>
        <div className="content">
          <p>{blog.content}</p>
        </div>
      </div>
    </div>
    
  )
}

export default Blog