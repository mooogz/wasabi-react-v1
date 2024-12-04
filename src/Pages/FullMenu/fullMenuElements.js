import styled from 'styled-components';

export const Main = styled.div`
    background: #1a1a1a;
    color: #fff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const MenuText = styled.h1`
    color: #90A959;
    text-align: center;
    font-size: 5rem;
    padding: 2rem 0;
`;

// Flex container to place two menus side-by-side
export const TwoColumnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 5rem;

    @media screen and (max-width: 650px) {
        flex-direction: column;
        }
`;

export const MenuContainer = styled.div`
    width: 48%;
    margin: 0 1rem;

    @media screen and (max-width: 650px) {
        min-width: 100%;
        margin: 0;
        }
`;

export const MenuList = styled.ul`
    color: #fff;
    padding: 1rem 0;
    list-style: none;
`;


// Add this styled component to the fullMenuElements file
export const WrapList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;  /* Space between items */
  padding: 1rem 0;
  list-style: none;
  text-align: left;
  color: #F5F5DC;

  li {
    flex: 1 1 calc(33.33% - 1rem); /* Adjust the width of each item */
    margin-bottom: 1rem;
  }
`;