import React from 'react';
import { Main, MenuText } from './fullMenuElements';
import Menu from '../../components/Menu';
import menuData from '../../data/menuData.json';

const FullMenu = () => {
  const categories = [
    { name: "Appetizers", items: menuData.find(category => category.category === "Appetizers")?.items },
    { name: "Soup & Salads", items: menuData.find(category => category.category === "Soup & Salads")?.items },
    { name: "Udon Soup", items: menuData.find(category => category.category === "Udon Soup")?.items },
    { name: "Yaki Udon", items: menuData.find(category => category.category === "Yaki Udon")?.items, description: menuData.find(category => category.category === "Yaki Udon")?.description },
    { name: "Poke Bowls", items: menuData.find(category => category.category === "Poke Bowls")?.items, description: menuData.find(category => category.category === "Poke Bowls")?.description },
    { name: "Hibachi", items: menuData.find(category => category.category === "Hibachi")?.items, description: menuData.find(category => category.category === "Hibachi")?.description }
  ];

  return (
    <Main>
      <MenuText>Menu</MenuText>
      {categories.map(({ name, items, description }) => (
        <Menu key={name} items={items} category={name} description={description} />
      ))}
    </Main>
  );
}

export default FullMenu;