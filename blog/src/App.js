import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseBlogURL, config } from "./services";
import BlogPost from "./components/BlogPost";
import NewPost from "./components/NewPost";
import About from "./components/About";
import Contact from "./components/Contact";
import axios from "axios";
import Nav from "./components/Nav.jsx";
import "./App.css";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const resp = await axios.get(baseBlogURL, config);
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
        <NewPost blogPosts={blogPosts} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <NewPost blogPosts={blogPosts} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  );
}

export default App;
