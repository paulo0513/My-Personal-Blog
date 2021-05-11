import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import BlogPost from "./components/BlogPost";
import axios from "axios";
import Nav from "./components/Nav.jsx";
import "./App.css";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const resp = await axios.get(baseURL, config);
      setBlogPosts(resp.data.records);
    };
    fetchBlogPosts();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <main>
          {blogPosts.map((blogPost) => (
            <BlogPost blogPost={blogPost} setToggleFetch={setToggleFetch} />
          ))}
        </main>
      </Route>
      <Route path="/new">
        <h3>This is where our form will go to make our new blog posts</h3>
      </Route>
      <Route path="/edit/:id">
        This will be a button to edit our existing posts
      </Route>
    </div>
  );
}

export default App;
