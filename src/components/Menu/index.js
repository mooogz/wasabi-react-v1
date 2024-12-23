import React from 'react';
import { MenuList, MenuHeader, ItemName, ItemPrice } from './menuElements';

const Menu = ({ items, category, description }) => {
  console.log(items);

  if (!Array.isArray(items)) {
    return <p>No menu items available</p>;
  }
  return (
    <div>
      <MenuHeader>{category}</MenuHeader>
      {description && <p>{description}</p>} {/* Render description if provided */}
      <MenuList>
        {items.map(item => (
          <li key={item.id}>
            <ItemName>{item.name}</ItemName> - {item.description} <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
          </li>
        ))}
      </MenuList>
    </div>
  );
}

export default Menu