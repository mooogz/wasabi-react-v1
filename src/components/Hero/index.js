import React, { useState } from 'react';
import Navbar from '../Navbar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn, HeroSpan } from './HeroElements';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
            <HeroItems>
                <HeroH1>Wasabi Japanese Restaurant</HeroH1>
                <HeroP>144 Owen Dr</HeroP>
                <HeroSpan>Fayetteville, NC</HeroSpan>
                <Link to="/menu"><HeroBtn>View Menu</HeroBtn></Link>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero