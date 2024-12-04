import styled, { keyframes } from 'styled-components';
import ImgBg from '../../images/sushi-bg.jpg';
import SteakBg from '../../images/steak_bg.jpg';


export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url(${ImgBg});
    min-height: 100vh;
    background-position: center;
    background-size: cover;
`;

export const HeroContent = styled.div`
    min-height: calc(100vh - 80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw - 1300px) / 2);
`

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;
    
    @media screen and (max-width: 650px) {
        width: 100%;
        }
    `

export const HeroH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 5px 5px #92c874;
    letter-spacing: 3px;
    color: #7CFF67;
`

export const HeroP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
`

export const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #7CFF67;
    color: #000;
    transition: 0.2s ease-out;
    border-radius: 35px;
    
    &:hover {
    background: #1D7D21;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    }
`;

export const HeroSpan = styled.span `
    font-size: 2rem;
    color: #fff;
    margin-bottom: 2rem;
    `