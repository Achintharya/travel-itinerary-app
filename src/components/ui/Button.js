import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.medium};
  
  ${props => props.variant === 'primary' && css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textLight};
    
    &:hover {
      background-color: ${props => props.theme.colors.secondary};
    }
  `}
  
  ${props => props.variant === 'secondary' && css`
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    
    &:hover {
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.textLight};
    }
  `}
  
  ${props => props.variant === 'text' && css`
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    padding: ${props => props.theme.spacing.xs};
    
    &:hover {
      background-color: rgba(74, 111, 255, 0.1);
    }
  `}
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  ${props => props.disabled && css`
    background-color: ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.textGray};
    cursor: not-allowed;
    
    &:hover {
      background-color: ${props => props.theme.colors.border};
      color: ${props => props.theme.colors.textGray};
    }
  `}
  
  ${props => props.size === 'small' && css`
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
    font-size: ${props => props.theme.fontSizes.small};
  `}
  
  ${props => props.size === 'large' && css`
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
    font-size: ${props => props.theme.fontSizes.large};
  `}
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
