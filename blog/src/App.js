import Nav from "./components/Nav";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <main>Home</main>
      </Route>
      <Route path="/about">
        <main>About Me</main>
      </Route>
      <Route path="/contact">
        <main>Contact</main>
      </Route>
      <Route path="/post">
        <main>Post</main>
      </Route>
    </div>
  );
}

export default App;
