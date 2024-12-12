import styled from "styled-components";

export const PhotosContainer = styled.div`
  background: #1a1a1a;
  min-height: 20vw;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 650px) {
    padding: 0.5rem; /* Reduce padding */
    min-height: 15vw; /* Adjust height */
  }
`;

export const ScrollableContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth; /* Smooth scrolling effect */
  padding: 0 1rem;

//   /* Hide horizontal scrollbar */
//   -ms-overflow-style: none;  /* IE and Edge */
//   scrollbar-width: none;  /* Firefox */
//   &::-webkit-scrollbar {
//     display: none;  /* Chrome, Safari, and Opera */
//   }

  img {
    border-radius: 10px;
    max-width: 300px;
    height: auto;
    margin: 0 1rem;

    @media screen and (max-width: 650px) {
      max-width: 75%;
    }
  }
`;
