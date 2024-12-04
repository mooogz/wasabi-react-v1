import styled from "styled-components";

export const PhotosContainer = styled.div`
    background: #1a1a1a;
    min-height: 20vw;
    background-position: center;
    background-size: cover;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media screen and (max-width: 650px) {
        flex-direction: column;
        align-items: center;
    }

    img {
        border-radius: 10px;
        width: 100%;
        max-width: 300px; 
        height: auto; 
        margin: 1rem;

        @media screen and (max-width: 650px) {
            max-width: 75%;
        }
    }
`;
