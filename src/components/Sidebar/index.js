// import React from 'react';
// import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from "./SidebarElements";
// import { Link as ScrollLink } from 'react-scroll';

// const Sidebar = ({isOpen, toggle}) => {
//   return (
//     <SidebarContainer isOpen={isOpen} onClick={toggle}>
//         <Icon>
//             <CloseIcon />
//         </Icon>
//         <SidebarMenu>
//             <SidebarLink><ScrollLink to="specials" smooth={true} 
//           duration={500} 
//           spy={true} 
//           exact="true" 
//           offset={-80} onClick={toggle}>Specials</ScrollLink></SidebarLink>
//             <SidebarLink to="/menu">Full Menu</SidebarLink>
//             <SidebarLink to="/">Contact</SidebarLink>
//         </SidebarMenu>
//         <SideBtnWrap>
//             <SidebarRoute to="/">Order Now</SidebarRoute>
//         </SideBtnWrap>
//     </SidebarContainer>
//   )
// }

// export default Sidebar