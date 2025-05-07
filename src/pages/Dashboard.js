import React from 'react';
import styled from 'styled-components';
import { useApp } from '../hooks/useApp';
import AppLayout from '../components/layout/AppLayout';
import TripHeader from '../components/dashboard/TripHeader';
import FlightCard from '../components/dashboard/FlightCard';
import AccommodationSection from '../components/dashboard/AccommodationSection';
import ActivitiesSection from '../components/dashboard/ActivitiesSection';
import DetailPanel from '../components/dashboard/DetailPanel';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const WelcomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const WelcomeText = styled.div``;

const WelcomeTitle = styled.h2`
  margin: 0 0 ${props => props.theme.spacing.xs} 0;
`;

const WelcomeSubtitle = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.textGray};
`;

const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const Dashboard = () => {
  const { user, trip, isThirdPaneOpen } = useApp();
  
  if (!user) {
    return <div>Loading...</div>;
  }
  
  return (
    <AppLayout secondaryContent={isThirdPaneOpen ? <DetailPanel /> : null}>
      <DashboardContainer>
        <WelcomeHeader>
          <WelcomeText>
            <WelcomeTitle>Hello {user.name}!</WelcomeTitle>
            <WelcomeSubtitle>Ready for the trip?</WelcomeSubtitle>
          </WelcomeText>
          <UserAvatar image={user.avatar} />
        </WelcomeHeader>
        
        {trip ? (
          <>
            <TripHeader />
            <FlightCard />
            <AccommodationSection />
            <ActivitiesSection />
          </>
        ) : (
          <div>No trips planned yet. Create a new trip to get started!</div>
        )}
      </DashboardContainer>
    </AppLayout>
  );
};

export default Dashboard;
