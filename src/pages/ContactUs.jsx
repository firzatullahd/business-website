import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../util/animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";

const ContactUs = () => {
  return (
    <StyledContacts
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledTitle>
        <StyledHide>
          <motion.h2 variants={titleAnimation}>Get In Touch.</motion.h2>
        </StyledHide>
      </StyledTitle>
      <div>
        <StyledHide>
          <StyledContact variants={titleAnimation}>
            <StyledCircle />
            <h2>Send us a message</h2>
          </StyledContact>
        </StyledHide>
        <StyledHide>
          <StyledContact variants={titleAnimation}>
            <StyledCircle />
            <h2>Send us an email</h2>
          </StyledContact>
        </StyledHide>
        <StyledHide>
          <StyledContact variants={titleAnimation}>
            <StyledCircle />
            <h2>Contact us through our social media</h2>
          </StyledContact>
        </StyledHide>
      </div>
      <ScrollTop />
    </StyledContacts>
  );
};

const StyledContacts = styled(motion.div)`
  padding: 5rem 8rem;
  min-height: 90vh;
  h2 {
    color: white;
  }
  @media (max-width: 560px) {
    padding: 3rem 2rem;
  }
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  /* background: #353535; */
  background: white;
`;

const StyledContact = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-size: 2.5rem;
  }
`;

export default ContactUs;
