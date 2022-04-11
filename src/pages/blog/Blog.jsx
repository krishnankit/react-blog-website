import "./blog.css";
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import {db} from "../../firebaseconfig";
import {collection, query, onSnapshot} from "firebase/firestore";

const Blog = () => {
  const {id} = useParams();

  const [blog, setBlog] = useState();

  return (
    <Navbar />
  )
}

export default Blog