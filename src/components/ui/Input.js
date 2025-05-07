import React from 'react';
import styled, { css } from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.marginBottom || props.theme.spacing.md};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
`;

const InputLabel = styled.label`
  font-size: ${props => props.theme.fontSizes.small};
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  
  /* Dark mode styles */
  body.dark-mode & {
    color: ${props => props.theme.darkMode.text};
  }
`;

const StyledInput = styled.input`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.medium};
  border: 1px solid ${props => props.theme.colors.border};
  font-size: ${props => props.theme.fontSizes.medium};
  transition: all 0.3s ease;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(74, 111, 255, 0.2);
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.textGray};
  }
  
  ${props => props.error && css`
    border-color: ${props => props.theme.colors.error};
    
    &:focus {
      box-shadow: 0 0 0 2px rgba(244, 67, 54, 0.2);
    }
  `}
  
  ${props => props.disabled && css`
    background-color: ${props => props.theme.colors.border};
    cursor: not-allowed;
  `}
  
  ${props => props.startIcon && css`
    padding-left: ${props => props.theme.spacing.xl};
  `}
  
  ${props => props.endIcon && css`
    padding-right: ${props => props.theme.spacing.xl};
  `}
  
  /* Dark mode styles */
  body.dark-mode & {
    background-color: ${props => props.theme.darkMode.card};
    border-color: ${props => props.theme.darkMode.border};
    color: ${props => props.theme.darkMode.text};
    
    &::placeholder {
      color: ${props => props.theme.colors.textGray};
    }
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StartIconWrapper = styled.div`
  position: absolute;
  left: ${props => props.theme.spacing.sm};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textGray};
`;

const EndIconWrapper = styled.div`
  position: absolute;
  right: ${props => props.theme.spacing.sm};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textGray};
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  font-size: ${props => props.theme.fontSizes.small};
  margin-top: ${props => props.theme.spacing.xs};
`;

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  disabled,
  fullWidth,
  startIcon,
  endIcon,
  marginBottom,
  ...props
}) => {
  return (
    <InputContainer fullWidth={fullWidth} marginBottom={marginBottom}>
      {label && <InputLabel>{label}</InputLabel>}
      <InputWrapper>
        {startIcon && <StartIconWrapper>{startIcon}</StartIconWrapper>}
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          error={!!error}
          startIcon={!!startIcon}
          endIcon={!!endIcon}
          {...props}
        />
        {endIcon && <EndIconWrapper>{endIcon}</EndIconWrapper>}
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
