// import { useState } from 'react';
import "./App.css";
import GithubProfile from "./GithubProfile";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const Home = () => {
    return <h1>Home</h1>;
  };

  const About = () => {
    return <h1>About</h1>;
  };

  const handleClick = () => {
    navigate("/about");
  };

  // const [username, setUsername] = useState('')

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log(event.target[0].value)
  //   setUsername(event.target[0].value)
  // }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/github-user/:gitHubUserName"
          element={<GithubProfile />}
        />
      </Routes>
      <Link to="/github-user/:jimmynono">James Repo</Link>
      <Link to="/github-user/:aikithoughts">David Repo</Link>
      <button onClick={handleClick}>Link to things</button>
      {/* <h1>hi class</h1> */}
      {/* <form onSubmit={handleFormSubmit}>
        <label htmlFor="username-input">Username:</label>
        <input type="text" id="username-input" name="username-input" />
        <button type="submit">Search</button>
      </form>
     {username && <GithubProfile username={username} />} */}
    </>
  );
}

export default App;
