import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMapPin, FiClock, FiCalendar } from 'react-icons/fi';
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

const CalendarContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
  overflow-x: auto;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const CalendarTitle = styled.h4`
  margin: 0;
  font-size: ${props => props.theme.fontSizes.medium};
`;

const CalendarGrid = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.xs};
`;

const CalendarDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.medium};
  min-width: 60px;
  cursor: pointer;
  background-color: ${props => props.isSelected ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.isSelected ? props.theme.colors.textLight : props.theme.colors.text};
  border: 1px solid ${props => props.isSelected ? props.theme.colors.primary : props.theme.colors.border};
  
  &:hover {
    background-color: ${props => props.isSelected ? props.theme.colors.primary : 'rgba(74, 111, 255, 0.1)'};
  }
  
  /* Dark mode styles */
  body.dark-mode & {
    color: ${props => props.isSelected ? props.theme.colors.textLight : props.theme.darkMode.text};
    border-color: ${props => props.isSelected ? props.theme.colors.primary : props.theme.darkMode.border};
    
    &:hover {
      background-color: ${props => props.isSelected ? props.theme.colors.primary : 'rgba(255, 255, 255, 0.1)'};
    }
  }
`;

const DayName = styled.div`
  font-size: ${props => props.theme.fontSizes.small};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const DayNumber = styled.div`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 600;
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const ActivityCard = styled(Card)`
  display: flex;
  overflow: hidden;
`;

const ActivityImage = styled.div`
  width: 120px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const ActivityContent = styled.div`
  flex: 1;
  padding: ${props => props.theme.spacing.md};
  display: flex;
  flex-direction: column;
`;

const ActivityName = styled.h4`
  margin: 0 0 ${props => props.theme.spacing.sm} 0;
  font-size: ${props => props.theme.fontSizes.medium};
`;

const ActivityDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.xs};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.textGray};
`;

const DetailIcon = styled.span`
  margin-right: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.primary};
`;

const ActivityActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`;

const ActivitiesSection = () => {
  const { trip, toggleThirdPane } = useApp();
  const [selectedDay, setSelectedDay] = useState('28');
  
  if (!trip || !trip.activities || trip.activities.length === 0) return null;
  
  // Generate calendar days
  const days = [
    { name: 'Mon', number: '27' },
    { name: 'Tue', number: '28' },
    { name: 'Wed', number: '29' },
    { name: 'Thu', number: '30' },
    { name: 'Fri', number: '31' },
    { name: 'Sat', number: '01' },
    { name: 'Sun', number: '02' },
  ];
  
  // Filter activities for selected day
  const filteredActivities = trip.activities.filter(activity => {
    const activityDay = activity.date.split('.')[0];
    return activityDay === selectedDay;
  });
  
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>Activities</SectionTitle>
        <Button variant="text" size="small">See All</Button>
      </SectionHeader>
      
      <CalendarContainer>
        <CalendarHeader>
          <CalendarTitle>May 2025</CalendarTitle>
        </CalendarHeader>
        
        <CalendarGrid>
          {days.map((day) => (
            <CalendarDay 
              key={day.number}
              isSelected={selectedDay === day.number}
              onClick={() => setSelectedDay(day.number)}
            >
              <DayName>{day.name}</DayName>
              <DayNumber>{day.number}</DayNumber>
            </CalendarDay>
          ))}
        </CalendarGrid>
      </CalendarContainer>
      
      <ActivityList>
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity, index) => (
            <ActivityCard key={index}>
              <ActivityImage image={images[activity.image]} />
              
              <ActivityContent>
                <ActivityName>{activity.name}</ActivityName>
                
                <ActivityDetail>
                  <DetailIcon><FiCalendar /></DetailIcon>
                  {activity.date}
                </ActivityDetail>
                
                <ActivityDetail>
                  <DetailIcon><FiClock /></DetailIcon>
                  {activity.time} • {activity.duration}
                </ActivityDetail>
                
                <ActivityDetail>
                  <DetailIcon><FiMapPin /></DetailIcon>
                  {activity.location}
                </ActivityDetail>
                
                <ActivityActions>
                  <Button variant="text" size="small" onClick={toggleThirdPane}>
                    View Details
                  </Button>
                </ActivityActions>
              </ActivityContent>
            </ActivityCard>
          ))
        ) : (
          <Card>
            <Card.Content>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                No activities scheduled for this day
              </div>
            </Card.Content>
          </Card>
        )}
      </ActivityList>
    </SectionContainer>
  );
};

export default ActivitiesSection;
