import React from 'react';
import { SpecialsContainer, Lunch, AllDay, SpecialsH1 } from './SpecialsElements';

const Specials = () => {
  return (
    <>
    <SpecialsContainer id="specials">
    <h1>Specials</h1>
    <div class="circle circle2"></div>
      <Lunch>
      <div class="circle circle1"></div>
        <h2>Lunch</h2>
        <span>*Every day until 3pm</span>
        <p>Two for $13 / Three for $18</p>
        <ul>
          <li>Army</li>
          <li>California</li>
          <li>Crunch</li>
          <li>CC</li>
          <li>Salmon Roll</li>
          <li>Spicy Tuna</li>
          <li>Tuna Roll</li>
          <li>Vegetarian Roll</li>
          <li>White Tuna Roll</li>
          <li>Yellowtail Roll</li>
        </ul>
      </Lunch>
      <AllDay>
        <h2>All Day Special</h2>
        <p>Any three rolls for $38 / Five for $62</p>
      </AllDay>
    </SpecialsContainer>
    </>
  )
}

export default Specials