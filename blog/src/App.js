import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import axios from "axios";
import Nav from "./components/Nav.jsx";
import "./App.css";

function App() {
  const [blogPosts, setblogPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
    };
    fetchBlogPosts();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <h3>This is where we'll find posts</h3>
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
