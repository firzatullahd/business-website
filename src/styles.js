import styled from 'styled-components';

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
