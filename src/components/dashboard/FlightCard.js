import React from 'react';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';
import { useApp } from '../../hooks/useApp';
import Card from '../ui/Card';
import Button from '../ui/Button';

const FlightCardContainer = styled(Card)`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const FlightCardHeader = styled(Card.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${props => props.theme.spacing.sm};
`;

const FlightCardTitle = styled.h3`
  margin: 0;
`;

const FlightCardBadge = styled.span`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: ${props => props.theme.fontSizes.small};
`;

const FlightDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.md} 0;
`;

const FlightLocation = styled.div`
  text-align: center;
  flex: 1;
`;

const FlightCity = styled.div`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.textGray};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const FlightAirport = styled.div`
  font-size: ${props => props.theme.fontSizes.xlarge};
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const FlightDate = styled.div`
  font-size: ${props => props.theme.fontSizes.small};
`;

const FlightTime = styled.div`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 500;
`;

const FlightArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.large};
  flex: 0 0 50px;
`;

const FlightCardFooter = styled(Card.Footer)`
  display: flex;
  justify-content: flex-end;
  padding-top: ${props => props.theme.spacing.sm};
`;

const FlightCard = () => {
  const { trip, toggleThirdPane } = useApp();
  
  if (!trip || !trip.flight) return null;
  
  const { departure, arrival } = trip.flight;
  
  return (
    <FlightCardContainer>
      <FlightCardHeader divider>
        <FlightCardTitle>Flight Details</FlightCardTitle>
        <FlightCardBadge>Round Trip</FlightCardBadge>
      </FlightCardHeader>
      
      <Card.Content>
        <FlightDetails>
          <FlightLocation>
            <FlightCity>{departure.city}</FlightCity>
            <FlightAirport>{departure.airport}</FlightAirport>
            <FlightDate>{departure.date}</FlightDate>
            <FlightTime>{departure.time}</FlightTime>
          </FlightLocation>
          
          <FlightArrow>
            <FiArrowRight />
          </FlightArrow>
          
          <FlightLocation>
            <FlightCity>{arrival.city}</FlightCity>
            <FlightAirport>{arrival.airport}</FlightAirport>
            <FlightDate>{arrival.date}</FlightDate>
            <FlightTime>{arrival.time}</FlightTime>
          </FlightLocation>
        </FlightDetails>
      </Card.Content>
      
      <FlightCardFooter divider>
        <Button variant="text" size="small" onClick={toggleThirdPane}>
          View Details
        </Button>
      </FlightCardFooter>
    </FlightCardContainer>
  );
};

export default FlightCard;
