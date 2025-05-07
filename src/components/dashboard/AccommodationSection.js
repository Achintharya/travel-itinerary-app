import React from 'react';
import styled from 'styled-components';
import { FiMapPin, FiCalendar, FiCheck } from 'react-icons/fi';
import { useApp } from '../../hooks/useApp';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { images } from '../../assets/images';

const SectionContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const SectionTitle = styled.h3`
  margin: 0;
`;

const AccommodationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.md};
`;

const AccommodationCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const AccommodationImage = styled.div`
  height: 150px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-top-left-radius: ${props => props.theme.borderRadius.medium};
  border-top-right-radius: ${props => props.theme.borderRadius.medium};
  position: relative;
`;

const AccommodationBadge = styled.div`
  position: absolute;
  top: ${props => props.theme.spacing.sm};
  left: ${props => props.theme.spacing.sm};
  background-color: ${props => props.confirmed ? props.theme.colors.success : props.theme.colors.warning};
  color: white;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
`;

const AccommodationPrice = styled.div`
  position: absolute;
  bottom: ${props => props.theme.spacing.sm};
  right: ${props => props.theme.spacing.sm};
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
`;

const AccommodationContent = styled(Card.Content)`
  flex: 1;
  padding: ${props => props.theme.spacing.md};
`;

const AccommodationName = styled.h4`
  margin: 0 0 ${props => props.theme.spacing.sm} 0;
  font-size: ${props => props.theme.fontSizes.large};
`;

const AccommodationDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.textGray};
`;

const DetailIcon = styled.span`
  margin-right: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.primary};
`;

const AccommodationFooter = styled(Card.Footer)`
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
`;

const AccommodationSection = () => {
  const { trip, toggleThirdPane } = useApp();
  
  if (!trip || !trip.accommodation || trip.accommodation.length === 0) return null;
  
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>Accommodation</SectionTitle>
        <Button variant="text" size="small">See All</Button>
      </SectionHeader>
      
      <AccommodationGrid>
        {trip.accommodation.map((hotel, index) => (
          <AccommodationCard key={index}>
            <AccommodationImage image={images[hotel.image]}>
              <AccommodationBadge confirmed={hotel.confirmed}>
                {hotel.confirmed ? 'Confirmed' : 'Not Confirmed'}
              </AccommodationBadge>
              <AccommodationPrice>{hotel.price}/night</AccommodationPrice>
            </AccommodationImage>
            
            <AccommodationContent>
              <AccommodationName>{hotel.name}</AccommodationName>
              
              <AccommodationDetail>
                <DetailIcon><FiMapPin /></DetailIcon>
                {hotel.address}
              </AccommodationDetail>
              
              <AccommodationDetail>
                <DetailIcon><FiCalendar /></DetailIcon>
                Check-in: {hotel.checkIn} • Check-out: {hotel.checkOut}
              </AccommodationDetail>
              
              <AccommodationDetail>
                <DetailIcon><FiCheck /></DetailIcon>
                {hotel.nights}
              </AccommodationDetail>
            </AccommodationContent>
            
            <AccommodationFooter divider>
              <Button variant="text" size="small" onClick={toggleThirdPane}>
                View Details
              </Button>
              {!hotel.confirmed && (
                <Button variant="secondary" size="small">
                  Confirm
                </Button>
              )}
            </AccommodationFooter>
          </AccommodationCard>
        ))}
      </AccommodationGrid>
    </SectionContainer>
  );
};

export default AccommodationSection;
