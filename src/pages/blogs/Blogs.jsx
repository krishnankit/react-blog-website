import "./blogs.css";
import { useState, useEffect } from "react";
import { db } from "../../firebaseconfig";
import { query, onSnapshot, collection } from "firebase/firestore";
import Blog from "../../components/blog/Blog";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'blogs'))
    onSnapshot(q, (querySnapshot) => {
      setBlogs(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
    console.log(blogs);
  },[])
  return (
    <div>
      <Navbar />
      <div className='blogs'>
        {blogs.map(blog => {
            return <Blog key={blog.id} title={blog.data.title} description={blog.data.description} img={blog.data.img} content={blog.data.content} author={blog.data.author} />
          })}
      </div>
      <Footer />
    </div>
  )
}

export default Blogs