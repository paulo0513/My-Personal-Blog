import axios from "axios"
import { baseBlogURL, config } from "../services"

function BlogPost(props) {
  const deletePost = async () => {
    const specificURL = `${baseBlogURL}/${props.blogPost.id}`;
    await axios.delete(specificURL, config);
    props.setToggleFetch((curr) => !curr)
  }

  const { title, body, date } = props.blogPost.fields

  return (
    <div>
      <h2>{title}</h2>
      <h4>{body}</h4>
      <h4>{date}</h4>
      <button onClick={deletePost}>Delete</button>
    </div>
  )
}

export default BlogPost;