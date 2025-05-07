import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.medium};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: 600;
    margin-bottom: ${props => props.theme.spacing.md};
  }

  h1 {
    font-size: ${props => props.theme.fontSizes.xxlarge};
  }

  h2 {
    font-size: ${props => props.theme.fontSizes.xlarge};
  }

  h3 {
    font-size: ${props => props.theme.fontSizes.large};
  }

  p {
    margin-bottom: ${props => props.theme.spacing.md};
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
    font-family: ${props => props.theme.fonts.main};
    font-size: ${props => props.theme.fontSizes.medium};
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    border-radius: ${props => props.theme.borderRadius.medium};
    border: none;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textLight};
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: ${props => props.theme.colors.secondary};
    }
    
    &:disabled {
      background-color: ${props => props.theme.colors.border};
      cursor: not-allowed;
    }
  }

  input, select, textarea {
    font-family: ${props => props.theme.fonts.main};
    font-size: ${props => props.theme.fontSizes.medium};
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    border-radius: ${props => props.theme.borderRadius.medium};
    border: 1px solid ${props => props.theme.colors.border};
    width: 100%;
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
  }

  /* Dark mode styles */
  body.dark-mode {
    background-color: ${props => props.theme.darkMode.background};
    color: ${props => props.theme.darkMode.text};
    
    input, select, textarea {
      background-color: ${props => props.theme.darkMode.card};
      border-color: ${props => props.theme.darkMode.border};
      color: ${props => props.theme.darkMode.text};
    }
  }

  /* Mobile responsiveness */
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    h1 {
      font-size: ${props => props.theme.fontSizes.xlarge};
    }
    
    h2 {
      font-size: ${props => props.theme.fontSizes.large};
    }
  }
`;
