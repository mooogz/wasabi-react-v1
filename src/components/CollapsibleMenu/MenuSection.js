import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Section = styled.div`
    margin-bottom: 1rem;
`;

const SectionTitle = styled.h3`
    cursor: pointer;
    padding: 0.5rem;
    color: #F5F5DC;
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 2rem;
    justify-content: center;
`;

const SectionContent = styled.div`
    overflow-y: auto;
    max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
    transition: max-height 0.3s ease;
    color: #F5F5DC;
`;

export const ItemName = styled.span`
    color: #A8C686;
    font-weight: bold;
`;

export const ItemPrice = styled.span`
    color: #A8C686;
`;

export const ListItem = styled.li`
    padding: .5rem 0;
`;

const MenuSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <Section>
            <SectionTitle onClick={toggleOpen}>
                {title}
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </SectionTitle>
            <SectionContent isOpen={isOpen}>{children}</SectionContent>
        </Section>
    );
};

export default MenuSection;
