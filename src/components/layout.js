import * as React from "react"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    line-height: 0.8;
    margin: 0;
    padding: 0;
  }
`

// Styled components
const Header = styled.header`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
`

const HeaderLogo = styled.a`
  width: 150px;
  height: 70px;
  overflow: hidden;
  margin-left: 20px;
  display: block;
  text-decoration: none;
`

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  position: relative;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: black;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`

const MainContent = styled.main`
  padding-top: 90px;
`

// 新增的 Styled components
const Sidebar = styled.div`
  position: fixed;
  right: -200px;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  transition: right 0.3s ease;
  z-index: 999;
  border-radius: 10px 0 0 10px;
  box-shadow: -2px 0 5px rgba(0,0,0,0.1);

  &:hover {
    right: 0;
  }
`

const SidebarLink = styled.a`
  display: block;
  padding: 0.7rem 0;
  color: black;
  text-decoration: none;
  transition: color 0.3s ease;
  line-height: 1.4;

  &:hover {
    color: #0066cc;
  }
`

const SidebarNumber = styled.span`
  margin-right: 0.5rem;
  font-weight: bold;
`

// Layout component
const Layout = ({ children }) => {
  // Smooth scroll function
  const scrollToSection = (sectionId) => (e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Header opacity change on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      header.style.backgroundColor = window.scrollY > 0 ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 1)';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header>
        <HeaderLogo href="https://ual.sg" target="_blank" rel="noopener noreferrer">
          <StaticImage
            src="../images/icon_ual.webp"
            alt="Thermal Affordance Logo"
            placeholder="blurred"
            layout="fixed"
            width={150}
            height={80}
            objectFit="cover"
            objectPosition="center 25%"
          />
        </HeaderLogo>
        <Nav>
          <NavLink href="#home" onClick={scrollToSection('home')}>Home</NavLink>
          <NavLink href="#concept" onClick={scrollToSection('concept')}>Concept Description</NavLink>
          <NavLink href="#method" onClick={scrollToSection('method')}>Paper Introduction</NavLink>
          <NavLink href="#map" onClick={scrollToSection('map')}>Dataset & Mapping</NavLink>
          <NavLink href="#team" onClick={scrollToSection('team')}>Team & Contact</NavLink>
        </Nav>
      </Header>
      <Sidebar>
        <SidebarLink href="#home" onClick={scrollToSection('home')}><SidebarNumber>1.</SidebarNumber>Cover</SidebarLink>
        <SidebarLink href="#concept" onClick={scrollToSection('concept')}><SidebarNumber>2.</SidebarNumber>Thermal Affordance</SidebarLink>
        <SidebarLink href="#property" onClick={scrollToSection('property')}><SidebarNumber>3.</SidebarNumber>Property of Thermal Affordance</SidebarLink>
        <SidebarLink href="#method" onClick={scrollToSection('method')}><SidebarNumber>4.</SidebarNumber>Computational Framework of VATA</SidebarLink>
        <SidebarLink href="#planning" onClick={scrollToSection('planning')}><SidebarNumber>5.</SidebarNumber>Planning Application of VATA</SidebarLink>
        <SidebarLink href="#map" onClick={scrollToSection('map')}><SidebarNumber>6.</SidebarNumber>Dataset & Mapping</SidebarLink>
        <SidebarLink href="#team" onClick={scrollToSection('team')}><SidebarNumber>7.</SidebarNumber>Team & Contact</SidebarLink>
      </Sidebar>
      <MainContent>{children}</MainContent>
    </>
  )
}

export default Layout