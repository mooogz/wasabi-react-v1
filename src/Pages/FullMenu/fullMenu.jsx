import React from 'react';
import { Main, MenuText, MenuContainer, TwoColumnContainer } from './fullMenuElements';
import menuData from '../../data/menuData.json';
import { MenuList } from '../../components/Menu/menuElements';
import CollapsibleMenu from '../../components/CollapsibleMenu/CollapsibleMenu';
import { useMediaQuery } from 'react-responsive';
import Menu from '../../components/Menu';

const FullMenu = () => {
  const isMobile = useMediaQuery({ maxWidth: 650 });

  const categories = [
    { name: "Appetizers", items: menuData.find(category => category.category === "Appetizers")?.items },
    { name: "Soup & Salads", items: menuData.find(category => category.category === "Soup & Salads")?.items },
    { name: "Udon Soup", items: menuData.find(category => category.category === "Udon Soup")?.items },
    { name: "Yaki Udon", items: menuData.find(category => category.category === "Yaki Udon")?.items, description: menuData.find(category => category.category === "Yaki Udon")?.description },
    { name: "Poke Bowls", items: menuData.find(category => category.category === "Poke Bowls")?.items, description: menuData.find(category => category.category === "Poke Bowls")?.description },
    { name: "Hibachi", items: menuData.find(category => category.category === "Hibachi")?.items, description: menuData.find(category => category.category === "Hibachi")?.description },
    { name: "Hibachi Sides", items: menuData.find(category => category.category === "Hibachi Sides")?.items, description: menuData.find(category => category.category === "Hibachi Sides")?.description },
    { name: "Bento Boxes", items: menuData.find(category => category.category === "Bento Boxes")?.items, description: menuData.find(category => category.category === "Bento Boxes")?.description },
    { name: "Desserts", items: menuData.find(category => category.category === "Desserts")?.items, description: menuData.find(category => category.category === "Desserts")?.description }
  ];

  const sushiRolls = menuData.find(category => category.category === "Nigiri & Sashimi");

  return (
    <Main>
      <MenuText>Menu</MenuText>
      {isMobile ? (
        // Render CollapsibleMenu on mobile screens
        <CollapsibleMenu categories={categories} sushiRolls={sushiRolls} />
      ) : (
        // Render the regular two-column layout on larger screens
        <TwoColumnContainer>
          <MenuContainer>
            <MenuList>
              {categories.map(({ name, items, description }) => (
                <Menu key={name} items={items} category={name} description={description} />
              ))}
            </MenuList>
          </MenuContainer>
          <MenuContainer>
            <MenuList>
              <Menu 
                key={sushiRolls.category} 
                items={sushiRolls.items} 
                category={sushiRolls.category}
                description={sushiRolls.description}
              />
            </MenuList>
          </MenuContainer>
        </TwoColumnContainer>
      )}
    </Main>
  );
}

export default FullMenu;
