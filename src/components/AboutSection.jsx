import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <motion.h2>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams </span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true.</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="guy with a camera" />
      </StyledImage>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 8rem;
  color: white;
`;
const StyledDescription = styled.div`
  flex: 1;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
`;
const StyledImage = styled.div`
  flex: 1;
  z-index: 2;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
