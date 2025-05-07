import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';
import { useApp } from '../../hooks/useApp';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Card from '../ui/Card';

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${props => props.theme.spacing.md};
  background-color: ${props => props.isDarkMode ? props.theme.darkMode.background : props.theme.colors.background};
`;

const OnboardingCard = styled(Card)`
  max-width: 500px;
  width: 100%;
  padding: ${props => props.theme.spacing.lg};
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.xxlarge};
  margin-bottom: ${props => props.theme.spacing.sm};
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.textGray};
  margin-bottom: ${props => props.theme.spacing.lg};
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const FormLabel = styled.h3`
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const TravelCompanionOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.md};
`;

const TravelCompanionOption = styled.div`
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.medium};
  border: 1px solid ${props => props.selected ? props.theme.colors.primary : props.theme.colors.border};
  background-color: ${props => props.selected ? 'rgba(74, 111, 255, 0.1)' : 'transparent'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
  
  /* Dark mode styles */
  body.dark-mode & {
    border-color: ${props => props.selected ? props.theme.colors.primary : props.theme.darkMode.border};
    background-color: ${props => props.selected ? 'rgba(74, 111, 255, 0.2)' : 'transparent'};
  }
`;

const CompanionIcon = styled.div`
  font-size: 24px;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const CompanionText = styled.div`
  font-size: ${props => props.theme.fontSizes.medium};
`;

const OnboardingScreen = () => {
  const navigate = useNavigate();
  const { tripFormData, updateTripFormData, createTrip, isDarkMode } = useApp();
  const [errors, setErrors] = useState({});
  
  const durationOptions = [
    { value: '1-3', label: '1-3 days' },
    { value: '4-7', label: '4-7 days' },
    { value: '8-14', label: '1-2 weeks' },
    { value: '15-30', label: '2-4 weeks' },
    { value: '30+', label: 'More than a month' },
  ];
  
  const handleSubmit = () => {
    // Validate form
    const newErrors = {};
    
    if (!tripFormData.destination) {
      newErrors.destination = 'Please enter a destination';
    }
    
    if (!tripFormData.duration) {
      newErrors.duration = 'Please select a duration';
    }
    
    if (!tripFormData.travelingWith) {
      newErrors.travelingWith = 'Please select who you are traveling with';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Create trip and navigate to dashboard
    createTrip();
    navigate('/dashboard');
  };
  
  return (
    <OnboardingContainer isDarkMode={isDarkMode}>
      <OnboardingCard>
        <Title>Plan Your Journey, Your Way!</Title>
        <Subtitle>Let's create your personalised travel experience</Subtitle>
        
        <FormGroup>
          <FormLabel>Where would you like to go?</FormLabel>
          <Input
            placeholder="Enter Destination"
            value={tripFormData.destination}
            onChange={(e) => updateTripFormData('destination', e.target.value)}
            startIcon={<FiMapPin />}
            error={errors.destination}
            fullWidth
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel>How long will you stay?</FormLabel>
          <Select
            options={durationOptions}
            value={tripFormData.duration}
            onChange={(value) => updateTripFormData('duration', value)}
            placeholder="Select Duration"
            error={errors.duration}
            fullWidth
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel>Who are you traveling with?</FormLabel>
          {errors.travelingWith && (
            <div style={{ color: 'red', marginBottom: '10px' }}>{errors.travelingWith}</div>
          )}
          <TravelCompanionOptions>
            <TravelCompanionOption
              selected={tripFormData.travelingWith === 'solo'}
              onClick={() => updateTripFormData('travelingWith', 'solo')}
            >
              <CompanionIcon>👤</CompanionIcon>
              <CompanionText>Solo</CompanionText>
            </TravelCompanionOption>
            
            <TravelCompanionOption
              selected={tripFormData.travelingWith === 'couple'}
              onClick={() => updateTripFormData('travelingWith', 'couple')}
            >
              <CompanionIcon>👫</CompanionIcon>
              <CompanionText>Couple</CompanionText>
            </TravelCompanionOption>
            
            <TravelCompanionOption
              selected={tripFormData.travelingWith === 'family'}
              onClick={() => updateTripFormData('travelingWith', 'family')}
            >
              <CompanionIcon>👨‍👩‍👧‍👦</CompanionIcon>
              <CompanionText>Family</CompanionText>
            </TravelCompanionOption>
            
            <TravelCompanionOption
              selected={tripFormData.travelingWith === 'friends'}
              onClick={() => updateTripFormData('travelingWith', 'friends')}
            >
              <CompanionIcon>👯</CompanionIcon>
              <CompanionText>Friends</CompanionText>
            </TravelCompanionOption>
          </TravelCompanionOptions>
        </FormGroup>
        
        <Button fullWidth onClick={handleSubmit}>
          Continue
        </Button>
      </OnboardingCard>
    </OnboardingContainer>
  );
};

export default OnboardingScreen;
