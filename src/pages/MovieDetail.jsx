import React, { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { MovieState } from "../movieState";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  // eslint-disable-next-line
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((m) => m.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <Fragment>
      {movie && (
        <StyledDetails>
          <StyledHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </StyledHeadline>
          <StyledAwards>
            {movie.awards.map((award) => (
              <StyledAward key={award.title}>
                <h3>{award.title}</h3>
                <div className="line"></div>
                <p>{award.description}</p>
              </StyledAward>
            ))}
          </StyledAwards>
          <StyledImage>
            <img src={movie.secondaryImg} alt={movie.title} />
          </StyledImage>
        </StyledDetails>
      )}
    </Fragment>
  );
};

const StyledDetails = styled.div`
  color: white;
`;
const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 8rem;
  align-items: center;
  justify-content: space-around;
`;
const StyledAward = styled.div`
  padding: 3rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const StyledImage = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;