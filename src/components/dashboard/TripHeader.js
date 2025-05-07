import React from 'react';
import styled from 'styled-components';
import { useApp } from '../../hooks/useApp';
import { images } from '../../assets/images';

const HeaderContainer = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  height: 200px;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  filter: brightness(0.7);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${props => props.theme.spacing.lg};
`;

const DestinationName = styled.h2`
  color: white;
  font-size: ${props => props.theme.fontSizes.xxlarge};
  margin-bottom: ${props => props.theme.spacing.xs};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const TripDates = styled.div`
  color: white;
  font-size: ${props => props.theme.fontSizes.medium};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const TripStats = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.sm};
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: ${props => props.theme.fontSizes.small};
  background-color: rgba(0, 0, 0, 0.3);
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.small};
`;

const StatIcon = styled.span`
  margin-right: ${props => props.theme.spacing.xs};
`;

const TripHeader = () => {
  const { trip } = useApp();
  
  if (!trip) return null;
  
  return (
    <HeaderContainer>
      <BackgroundImage image={images.tokyo} />
      <Overlay>
        <DestinationName>{trip.destination}</DestinationName>
        <TripDates>{trip.startDate} - {trip.endDate}</TripDates>
        <TripStats>
          <StatItem>
            <StatIcon>✈️</StatIcon> 6 days
          </StatItem>
          <StatItem>
            <StatIcon>🏨</StatIcon> 1 hotel
          </StatItem>
          <StatItem>
            <StatIcon>🎭</StatIcon> 3 activities
          </StatItem>
        </TripStats>
      </Overlay>
    </HeaderContainer>
  );
};

export default TripHeader;
