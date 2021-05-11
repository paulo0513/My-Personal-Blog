import axios from "axios";
import { baseBlogURL, config } from "../services";
import { useState } from "react";

function NewPost(props) {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(0)
  const [body, setBody] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      date,
      body,
    }
    await axios.post(baseBlogURL, { fields: newPost }, config);
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