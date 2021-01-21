import React from "react";
import styled from "styled-components";
import home2 from "../img/home2.png";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import money from "../img/money.svg";
import { motion } from "framer-motion";
import { fade } from "../util/animation";
import useScroll from "../util/useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServices
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledDescription>
        <h2>
          High <span>quality</span> services.
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="expensive camera" />
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 8rem;
  color: white;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 768px) {
    display: block;
    justify-content: center;
  }
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
    @media (max-width: 560px) {
      height: 50vh;
    }
  }
`;

const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  @media (max-width: 560px) {
    grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
    justify-content: center;
  }
`;
const StyledCard = styled.div`
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

export default ServicesSection;
