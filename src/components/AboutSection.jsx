import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import home1 from "../img/home1.png";
import { titleAnimation, fade, photoAnimation } from "../util/animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams </span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </StyledHide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="guy with a camera"
        />
      </StyledImage>
      <Wave />
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
  @media (max-width: 560px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
const StyledDescription = styled.div`
  flex: 1;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 560px) {
    padding: 0rem;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
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
