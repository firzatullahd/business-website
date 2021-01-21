import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { createGlobalStyle } from "styled-components";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import { MovieState } from "./util/movieState";

function App() {
  const location = useLocation();
  // eslint-disable-next-line
  const [movies, setMovies] = useState(MovieState);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={AboutUs} />
          <Route
            path="/work"
            exact
            render={(props) => <OurWork {...props} movies={movies} />}
          />
          <Route path="/contact" component={ContactUs} />
          <Route
            path="/work/:id"
            render={(props) => <MovieDetail {...props} movies={movies} />}
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing:border-box; 
  }
  html {
    @media (max-width : 768px) {
      font-size:55%;
      p {
        font-size:180%;
      }
    }
    @media (max-width : 450px) {
      font-size:40%;
      p {
        font-size:180%;
      }
    }
  }

  body{
    overflow-x:hidden;
    background: #111111;
    font-family: 'Inter', sans-serif;
    color: white;
  }
  button {
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background: #23d997;
        color: white;
    }
  }
  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }
  h3 {
    color: white;
  }
  h4 {
    font-weight:bold;
    font-size:2rem;
  }
  span {
    font-weight:bold;
    color: #23d997;
  }
  a {
    font-size:1.1rem;
  }
  p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height:150%;
  }
`;

export default App;
