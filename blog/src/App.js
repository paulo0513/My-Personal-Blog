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
      <header>
        <h1 className="blog-title"> &lt;paul /&gt; </h1>
        <h3 className="blog-subheading">
          (Reactjs ? compiled successfully : failed to compile)
        </h3>
      </header>
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
      <footer>&#169;Paul Oh 2021</footer>
    </div>
  );
}

export default App;
