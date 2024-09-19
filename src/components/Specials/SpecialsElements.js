import styled from 'styled-components';


export const SpecialsContainer = styled.div`
    background-color: #f0f0f0;
    margin: 0;
    padding: 2rem 4rem;
    position: relative;
    height: 60vh;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;

    .circle {
        position: absolute;
        border-radius: 50%;
    }
    
    .circle1 {
        background: rgba(187, 216, 192, .3);
        width: 60vw;
        height: 60vw;
        left: -15vw;
        top: 20vh;
        transform: translate(-10%, -10%);
    }
    
    .circle2 {
    background: rgba(107, 136, 102, .3);
    width: 40vw;
    height: 40vw;
    right: -20vw;
    bottom: 5vh;
    transform: translate(5%, 5%);
    }

    h1 {
    align-self: flex-start;
    font-size: 5rem;
    text-transform: uppercase;
    color: #41AE45;
    letter-spacing: .6rem;
     grid-column: 1 / -1;
    }

    h2 {
    font-size: 4rem;
    }
    
    ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 10px; /* Optional: Adds spacing between items */
    list-style: none; /* Optional: Removes default bullets */
    padding: 0;
    margin: 0;
}
    p {
    margin: 1rem 0;
    font-weight: 800;
    font-size: 1.5rem;
    color: #41AE45;
    }

    @media screen and (max-width: 650px) {
        height: 100%;
        width: 100%;

        h1 {
        font-size: 3rem;
        }

        h2 {
        font-size: 1.5rem;
        }

}
`;



export const Lunch = styled.div`
    width: 50%;

    @media screen and (max-width: 650px) {
    width: 100%;
}

`

export const AllDay = styled.div`
    ul {
    list-style: none;
    }
    
    width: 50%;
    @media screen and (max-width: 650px) {
    width: 100%;
}
`;