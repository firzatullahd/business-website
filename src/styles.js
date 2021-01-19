import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing:border-box; 
  }
  body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
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




export const StyledAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 8rem;
    color: white;
    `;

export const StyledServices = styled(StyledAbout)`
    h2 {
        padding-bottom: 5rem;
      }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
      }
    `;
export const StyledDescription = styled.div`
    flex: 1;
    z-index: 2;
    h2 {
        font-weight: lighter;
    }
`;

export const StyledImage = styled.div`
    flex: 1;
    z-index: 2;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const StyledHide = styled.div`
    overflow: hidden;
`;

export const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
export const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export const StyledNav = styled.nav`
  min-height: 10vh;
  background: #282828;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 8rem;
  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    li {
      padding-left: 10rem;
      position: relative;
    }
  }
`;