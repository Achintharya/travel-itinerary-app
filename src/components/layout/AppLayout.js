import React from 'react';
import styled from 'styled-components';
import { useApp } from '../../hooks/useApp';
import { FiHome, FiSearch, FiPlus, FiHeart, FiUser } from 'react-icons/fi';
import { FiSun, FiMoon } from 'react-icons/fi';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: ${props => props.theme.colors.background};
  
  /* Dark mode styles */
  body.dark-mode & {
    background-color: ${props => props.theme.darkMode.background};
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.md};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.background};
  z-index: 10;
  
  /* Dark mode styles */
  body.dark-mode & {
    background-color: ${props => props.theme.darkMode.card};
    border-color: ${props => props.theme.darkMode.border};
  }
`;

const HeaderTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.large};
  margin: 0;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.large};
  
  /* Dark mode styles */
  body.dark-mode & {
    color: ${props => props.theme.darkMode.text};
  }
`;

const Content = styled.main`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${props => props.theme.spacing.md};
  transition: width 0.3s ease;
  width: ${props => (props.isThirdPaneOpen ? '50%' : '100%')};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: ${props => (props.isThirdPaneOpen ? '0' : '100%')};
    display: ${props => (props.isThirdPaneOpen ? 'none' : 'block')};
  }
`;

const SecondaryContent = styled.div`
  width: ${props => (props.isOpen ? '50%' : '0')};
  overflow-y: auto;
  padding: ${props => (props.isOpen ? props.theme.spacing.md : 0)};
  border-left: ${props => (props.isOpen ? `1px solid ${props.theme.colors.border}` : 'none')};
  transition: width 0.3s ease;
  
  /* Dark mode styles */
  body.dark-mode & {
    border-color: ${props => props.theme.darkMode.border};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: ${props => (props.isOpen ? '100%' : '0')};
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-top: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.background};
  z-index: 10;
  
  /* Dark mode styles */
  body.dark-mode & {
    background-color: ${props => props.theme.darkMode.card};
    border-color: ${props => props.theme.darkMode.border};
  }
`;

const NavItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.textGray)};
  font-size: ${props => props.theme.fontSizes.small};
  
  /* Dark mode styles */
  body.dark-mode & {
    color: ${props => (props.active ? props.theme.colors.primary : props.theme.darkMode.text)};
  }
`;

const NavIcon = styled.div`
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const NavText = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
`;

const AppLayout = ({ children, secondaryContent }) => {
  const { isThirdPaneOpen, activeTab, setActiveTab, isDarkMode, toggleTheme } = useApp();
  
  return (
    <LayoutContainer>
      <Header>
        <HeaderTitle>Travel Itinerary</HeaderTitle>
        <HeaderActions>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </ThemeToggle>
        </HeaderActions>
      </Header>
      
      <Content>
        <MainContent isThirdPaneOpen={isThirdPaneOpen}>
          {children}
        </MainContent>
        
        <SecondaryContent isOpen={isThirdPaneOpen}>
          {secondaryContent}
        </SecondaryContent>
      </Content>
      
      <Footer>
        <NavItem 
          active={activeTab === 'home'} 
          onClick={() => setActiveTab('home')}
        >
          <NavIcon><FiHome /></NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        
        <NavItem 
          active={activeTab === 'search'} 
          onClick={() => setActiveTab('search')}
        >
          <NavIcon><FiSearch /></NavIcon>
          <NavText>Search</NavText>
        </NavItem>
        
        <NavItem 
          active={activeTab === 'add'} 
          onClick={() => setActiveTab('add')}
        >
          <NavIcon><FiPlus /></NavIcon>
          <NavText>Add</NavText>
        </NavItem>
        
        <NavItem 
          active={activeTab === 'favorites'} 
          onClick={() => setActiveTab('favorites')}
        >
          <NavIcon><FiHeart /></NavIcon>
          <NavText>Favorites</NavText>
        </NavItem>
        
        <NavItem 
          active={activeTab === 'profile'} 
          onClick={() => setActiveTab('profile')}
        >
          <NavIcon><FiUser /></NavIcon>
          <NavText>Profile</NavText>
        </NavItem>
      </Footer>
    </LayoutContainer>
  );
};

export default AppLayout;
