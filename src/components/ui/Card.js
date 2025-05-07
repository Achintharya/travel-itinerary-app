import React from 'react';
import styled, { css } from 'styled-components';

const StyledCard = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.medium};
  padding: ${props => props.padding || props.theme.spacing.md};
  margin-bottom: ${props => props.marginBottom || props.theme.spacing.md};
  overflow: hidden;
  
  ${props => props.variant === 'outlined' && css`
    box-shadow: none;
    border: 1px solid ${props => props.theme.colors.border};
  `}
  
  ${props => props.clickable && css`
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${props => props.theme.shadows.large};
    }
  `}
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  /* Dark mode styles */
  body.dark-mode & {
    background-color: ${props => props.theme.darkMode.card};
    border-color: ${props => props.theme.darkMode.border};
  }
`;

const CardHeader = styled.div`
  padding: ${props => props.padding || '0'};
  margin-bottom: ${props => props.theme.spacing.sm};
  border-bottom: ${props => props.divider ? `1px solid ${props.theme.colors.border}` : 'none'};
  
  /* Dark mode styles */
  body.dark-mode & {
    border-color: ${props => props.theme.darkMode.border};
  }
`;

const CardContent = styled.div`
  padding: ${props => props.padding || '0'};
`;

const CardFooter = styled.div`
  padding: ${props => props.padding || '0'};
  margin-top: ${props => props.theme.spacing.sm};
  border-top: ${props => props.divider ? `1px solid ${props.theme.colors.border}` : 'none'};
  display: flex;
  justify-content: ${props => props.align || 'flex-start'};
  
  /* Dark mode styles */
  body.dark-mode & {
    border-color: ${props => props.theme.darkMode.border};
  }
`;

const Card = ({
  children,
  variant,
  clickable,
  fullWidth,
  padding,
  marginBottom,
  onClick,
  ...props
}) => {
  return (
    <StyledCard
      variant={variant}
      clickable={clickable}
      fullWidth={fullWidth}
      padding={padding}
      marginBottom={marginBottom}
      onClick={clickable ? onClick : undefined}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
