import axios from "axios";
import { baseBlogURL, config } from "../services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function NewPost(props) {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(0);
  const [body, setBody] = useState("");
  const params = useParams();

  useEffect(() => {
    if (params.id && props.blogPost.length) {
      const currPost = props.blogPost.find((currPost) => currPost.id === params.id);
      if (currPost) {
        setTitle(currPost.fields.title);
        setDate(currPost.fields.date);
        setBody(currPost.fields.body)
      }
    }
  }, [props.blogPosts, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      date,
      body,
    }
    if (params.id) {
      const specificURL = `${baseBlogURL}/${params.id}`
      await axios.put(specificURL, { fields: newPost }, config);
    } else {
      await axios.post(baseBlogURL, { fields: newPost }, config);
    } 
    props.setToggleFetch((curr) => !curr);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Publish a New Post</h2>
      <label htmlFor="title"></label>
      <input
        type="text"
        placeholder="Add your title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="date"></label>
      <input
        type="date"
        placeholder="MM/DD/YYY"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        />
      <label htmlFor="body"></label>
      <textarea
        type="text"
        placeholder="Add your thoughts here..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Publish</button>
    </form>
  )
}

export default NewPost;