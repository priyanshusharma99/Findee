import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";

const Nav = styled.nav`
  background: rgba(26, 26, 46, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 215, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, #ffd700, #ffa500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #e2e2e2;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ffd700;
    background: rgba(255, 215, 0, 0.1);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background: linear-gradient(45deg, #ffd700, #ffa500);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover::after {
    width: 80%;
  }
`;

const MenuButton = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 215, 0, 0.1);

  &:hover {
    color: #ffd700;
  }
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Stories", href: "/stories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">📚 Findee</Logo>

        <NavLinks>
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
            </NavLink>
          ))}
        </NavLinks>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </NavContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {navItems.map((item) => (
              <MobileNavLink 
                key={item.name}
                to={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar; 