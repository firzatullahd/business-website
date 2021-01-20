import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MovieState } from "../util/movieState";
import { pageAnimation } from "../util/animation";

const OurWork = () => {
  // eslint-disable-next-line
  const [movies, setMovies] = useState(MovieState);
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {movies.map((movie) => (
        <StyledMovie>
          <h2>{movie.title}</h2>
          <div className="line"></div>
          <Link to={movie.url}>
            <img src={movie.mainImg} alt={movie.title} />
          </Link>
        </StyledMovie>
      ))}
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 8rem;
  color: white;
  h2 {
    padding: 1rem 0rem;
  }
`;

const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
