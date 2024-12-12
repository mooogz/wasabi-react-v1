import React from 'react';
import MenuSection, { ItemName, ListItem } from './MenuSection';


const CollapsibleMenu = ({ categories, sushiRolls, sushiMeals, specialRolls }) => {
    return (
        <div>

            {/* Render sushiRolls if available */}
            {sushiRolls && (
                <MenuSection title={sushiRolls.category}>
                    {sushiRolls.description && <p>{sushiRolls.description}</p>}
                    <ul>
                        {sushiRolls.items.map((item, index) => (
                            <ListItem key={index}>
                                <ItemName>{item.name}</ItemName>
                                {item.price && ` - $${item.price}`}
                                {item.description && <p>{item.description}</p>}
                            </ListItem>
                        ))}
                    </ul>
                </MenuSection>
            )}

            {/* Render sushiMeals if available */}
            {sushiMeals && (
                <MenuSection title={sushiMeals.category}>
                    {sushiMeals.description && <p>{sushiMeals.description}</p>}
                    <ul>
                        {sushiMeals.items.map((item, index) => (
                            <ListItem key={index}>
                                <ItemName>{item.name}</ItemName>
                                {item.price && ` - $${item.price}`}
                                {item.description && <p>{item.description}</p>}
                            </ListItem>
                        ))}
                    </ul>
                </MenuSection>
            )}

                {specialRolls && (
                <MenuSection title={specialRolls.category}>
                    {specialRolls.description && <p>{specialRolls.description}</p>}
                    <ul>
                        {specialRolls.items.map((item, index) => (
                            <ListItem key={index}>
                                <ItemName>{item.name}</ItemName>
                                {item.price && ` - $${item.price.toFixed(2)}`}
                                {item.description && <p>{item.description}</p>}
                            </ListItem>
                        ))}
                    </ul>
                </MenuSection>
            )}
            
            {/* Render categories */}
            {categories.map(({ name, items, description }) => (
                <MenuSection key={name} title={name}>
                    {description && <p>{description}</p>}
                    <ul>
                        {items.map((item, index) => (
                            <ListItem key={index}>
                                <ItemName>{item.name}</ItemName>
                                {item.price && ` - $${item.price.toFixed(2)}`}
                                {item.description && <p>{item.description}</p>}
                            </ListItem>
                        ))}
                    </ul>
                </MenuSection>
            ))}
            
            
        </div>
    );
};

export default CollapsibleMenu;
