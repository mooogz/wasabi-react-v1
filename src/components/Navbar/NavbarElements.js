import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiSushis } from 'react-icons/gi';

export const Nav = styled.nav`
    background: transparent;
    height: 110px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    `;

export const NavLink = styled(Link)`
    color: #92c874;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    
    @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px
     }
    `;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #92c874;
    
    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
        font-size: 1.4rem;
    }
    `
export const Bars = styled(GiSushis)`
    font-size: 2rem;
    transform: translate(-50%, -15%)
    `


export const Logo = styled.img`
width: 100px;
height: auto;
`;