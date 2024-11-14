import React from 'react';
import MenuSection from './MenuSection';

const CollapsibleMenu = ({ categories, sushiRolls }) => {
    return (
        <div>
            {categories.map(({ name, items, description }) => (
                <MenuSection key={name} title={name}>
                    {description && <p>{description}</p>}
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item.name}</li> 
                        ))}
                    </ul>
                </MenuSection>
            ))}
            {/* Render sushiRolls in a separate section if needed */}
            {sushiRolls && (
                <MenuSection title={sushiRolls.category}>
                    {sushiRolls.description && <p>{sushiRolls.description}</p>}
                    <ul>
                        {sushiRolls.items.map((item, index) => (
                            <li key={index}>{item.name}</li> 
                        ))}
                    </ul>
                </MenuSection>
            )}
        </div>
    );
};

export default CollapsibleMenu;
