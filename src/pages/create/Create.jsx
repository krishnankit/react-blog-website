import "./create.css";
import Navbar from '../../components/navbar/Navbar';
import Footer from "../../components/footer/Footer";
import {db} from "../../firebaseconfig";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

const Create = () => {
  const[title, setTitle] = useState("");
  const[author, setAuthor] = useState("");
  const[image, setImage] = useState("");
  const[description, setDescription] = useState("");
  const[content, setContent] = useState("");

  async function addData() {
    const data = {
      title: title,
      author: author,
      img: image,
      description: description,
      content: content
    }
    
    const docRef = await addDoc(collection(db, "blogs"), data);
    console.log(docRef.id);
  }

  function handleClick() {
    addData();
  }

  return (
    <div className="create">
      <Navbar />
      <div className="create-container">
        <div className="heading">
          <h1>Enter Details for blog</h1>
        </div>
        <div className='form'>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title"
            value={title}
            onChange={e => {setTitle(e.target.value)}} />
          </div>
          <div className="form-control">
            <label htmlFor="author">Author</label>
            <input type="text" name="author" id="author"
            value={author}
            onChange={e => {setAuthor(e.target.value)}} />
          </div>
          <div className="form-control">
            <label htmlFor="image">Image URL</label>
            <input type="text" name="image" id="image"
            value={image}
            onChange={e => {setImage(e.target.value)}} />
          </div>
          <div className="form-data">
            <label htmlFor="description">Description (45 to 55 words)</label>
            <textarea type="text" name="description" id="description"
            value={description}
            onChange={e => setDescription(e.target.value)} />
          </div>
          <div className="form-data">
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content"
            value={content}
            onChange={e => {setContent(e.target.value)}} ></textarea>
          </div>
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Create;