import React from 'react';
import { Nav, NavLink, NavIcon, Bars, Logo } from './NavbarElements';
import logo from '../../images/wasabi-logo.png';

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavLink to="/"><Logo src={logo}/></NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Bars />
            </NavIcon>
        </Nav>
    </>
  )
}

export default Navbar