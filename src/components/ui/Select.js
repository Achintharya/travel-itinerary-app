import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.marginBottom || props.theme.spacing.md};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  position: relative;
`;

const SelectLabel = styled.label`
  font-size: ${props => props.theme.fontSizes.small};
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  
  /* Dark mode styles */
  body.dark-mode & {
    color: ${props => props.theme.darkMode.text};
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledSelect = styled.div`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.medium};
  border: 1px solid ${props => props.theme.colors.border};
  font-size: ${props => props.theme.fontSizes.medium};
  background-color: ${props => props.theme.colors.background};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(74, 111, 255, 0.2);
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
  
  ${props => props.isOpen && css`
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(74, 111, 255, 0.2);
  `}
  
  /* Dark mode styles */
  body.dark-mode & {
    background-color: ${props => props.theme.darkMode.card};
    border-color: ${props => props.theme.darkMode.border};
    color: ${props => props.theme.darkMode.text};
  }
`;

const DropdownIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  ${props => props.isOpen && css`
    transform: rotate(180deg);
  `}
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: ${props => props.theme.spacing.xs};
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.medium};
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
  display: ${props => props.isOpen ? 'block' : 'none'};
  
  /* Dark mode styles */
  body.dark-mode & {
    background-color: ${props => props.theme.darkMode.card};
    border-color: ${props => props.theme.darkMode.border};
  }
`;

const DropdownItem = styled.div`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(74, 111, 255, 0.1);
  }
  
  ${props => props.isSelected && css`
    background-color: rgba(74, 111, 255, 0.2);
    font-weight: 500;
  `}
  
  /* Dark mode styles */
  body.dark-mode &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  body.dark-mode ${props => props.isSelected && css`
    background-color: rgba(255, 255, 255, 0.2);
  `}
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  font-size: ${props => props.theme.fontSizes.small};
  margin-top: ${props => props.theme.spacing.xs};
`;

const Select = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  error,
  disabled,
  fullWidth,
  marginBottom,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  
  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };
  
  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };
  
  const selectedOption = options.find(option => option.value === value);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <SelectContainer fullWidth={fullWidth} marginBottom={marginBottom} ref={selectRef}>
      {label && <SelectLabel>{label}</SelectLabel>}
      <SelectWrapper>
        <StyledSelect
          onClick={toggleDropdown}
          isOpen={isOpen}
          error={!!error}
          disabled={disabled}
          tabIndex={0}
          {...props}
        >
          <div>{selectedOption ? selectedOption.label : placeholder}</div>
          <DropdownIcon isOpen={isOpen}>
            <FiChevronDown />
          </DropdownIcon>
        </StyledSelect>
        <DropdownMenu isOpen={isOpen}>
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => handleSelect(option)}
              isSelected={value === option.value}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </SelectWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </SelectContainer>
  );
};

export default Select;
