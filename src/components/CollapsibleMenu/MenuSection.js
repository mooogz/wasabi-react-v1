// src/components/CollapsibleMenu/MenuSection.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
    margin-bottom: 1rem;
`;

const SectionTitle = styled.h3`
    cursor: pointer;
    padding: 0.5rem;
    text-align: center;
`;

const SectionContent = styled.div`
    overflow: hidden;
    max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
    transition: max-height 0.3s ease;
`;

const MenuSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <Section>
            <SectionTitle onClick={toggleOpen}>{title}</SectionTitle>
            <SectionContent isOpen={isOpen}>{children}</SectionContent>
        </Section>
    );
};

export default MenuSection;
