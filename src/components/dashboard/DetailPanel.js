import React, { useState } from 'react';
import styled from 'styled-components';
import { FiX, FiMapPin, FiCalendar, FiClock, FiInfo, FiDollarSign, FiPhone, FiGlobe } from 'react-icons/fi';
import { useApp } from '../../hooks/useApp';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { images } from '../../assets/images';

const PanelContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${props => props.theme.spacing.md};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  margin-bottom: ${props => props.theme.spacing.md};
  
  /* Dark mode styles */
  body.dark-mode & {
    border-color: ${props => props.theme.darkMode.border};
  }
`;

const PanelTitle = styled.h3`
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.large};
  
  /* Dark mode styles */
  body.dark-mode & {
    color: ${props => props.theme.darkMode.text};
  }
`;

const PanelContent = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const ImageContainer = styled.div`
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: ${props => props.theme.borderRadius.medium};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const DetailSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const SectionTitle = styled.h4`
  margin: 0 0 ${props => props.theme.spacing.sm} 0;
  font-size: ${props => props.theme.fontSizes.large};
`;

const DetailItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const DetailIcon = styled.span`
  margin-right: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.medium};
  padding-top: 2px;
`;

const DetailContent = styled.div`
  flex: 1;
`;

const DetailLabel = styled.div`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.textGray};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const DetailValue = styled.div`
  font-size: ${props => props.theme.fontSizes.medium};
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  margin-bottom: ${props => props.theme.spacing.md};
  
  /* Dark mode styles */
  body.dark-mode & {
    border-color: ${props => props.theme.darkMode.border};
  }
`;

const Tab = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: none;
  border: none;
  border-bottom: 2px solid ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  
  /* Dark mode styles */
  body.dark-mode & {
    color: ${props => props.active ? props.theme.colors.primary : props.theme.darkMode.text};
  }
`;

const MapPlaceholder = styled.div`
  height: 200px;
  background-color: #f0f0f0;
  border-radius: ${props => props.theme.borderRadius.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.textGray};
  
  /* Dark mode styles */
  body.dark-mode & {
    background-color: ${props => props.theme.darkMode.card};
    color: ${props => props.theme.darkMode.text};
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.lg};
`;

const DetailPanel = () => {
  const { toggleThirdPane } = useApp();
  const [activeTab, setActiveTab] = useState('details');
  
  // Mock data for the detail panel
  // In a real app, this would come from the selected item
  const detailData = {
    type: 'activity', // 'flight', 'accommodation', or 'activity'
    name: 'Sensoji Temple & Nakamise Shopping Street',
    image: images.sensoji,
    date: '28.05.2025',
    time: 'Anytime before 5:00pm',
    duration: '2 hours',
    location: '2-3-1 Asakusa, Taito City, Tokyo',
    description: 'Sensō-ji is an ancient Buddhist temple located in Asakusa, Tokyo, Japan. It is Tokyo\'s oldest temple, and one of its most significant. Adjacent to the temple is a shopping street called Nakamise, where you can buy traditional Japanese souvenirs and snacks.',
    price: 'Free entry',
    website: 'https://www.senso-ji.jp',
    phone: '+81 3-3842-0181',
    openingHours: '6:00 AM - 5:00 PM (Main hall)',
  };
  
  const renderContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <>
            <ImageContainer image={detailData.image} />
            
            <DetailSection>
              <SectionTitle>{detailData.name}</SectionTitle>
              <p>{detailData.description}</p>
            </DetailSection>
            
            <DetailSection>
              <SectionTitle>Information</SectionTitle>
              
              <DetailItem>
                <DetailIcon><FiCalendar /></DetailIcon>
                <DetailContent>
                  <DetailLabel>Date</DetailLabel>
                  <DetailValue>{detailData.date}</DetailValue>
                </DetailContent>
              </DetailItem>
              
              <DetailItem>
                <DetailIcon><FiClock /></DetailIcon>
                <DetailContent>
                  <DetailLabel>Time</DetailLabel>
                  <DetailValue>{detailData.time}</DetailValue>
                </DetailContent>
              </DetailItem>
              
              <DetailItem>
                <DetailIcon><FiInfo /></DetailIcon>
                <DetailContent>
                  <DetailLabel>Duration</DetailLabel>
                  <DetailValue>{detailData.duration}</DetailValue>
                </DetailContent>
              </DetailItem>
              
              <DetailItem>
                <DetailIcon><FiMapPin /></DetailIcon>
                <DetailContent>
                  <DetailLabel>Location</DetailLabel>
                  <DetailValue>{detailData.location}</DetailValue>
                </DetailContent>
              </DetailItem>
              
              <DetailItem>
                <DetailIcon><FiDollarSign /></DetailIcon>
                <DetailContent>
                  <DetailLabel>Price</DetailLabel>
                  <DetailValue>{detailData.price}</DetailValue>
                </DetailContent>
              </DetailItem>
              
              <DetailItem>
                <DetailIcon><FiClock /></DetailIcon>
                <DetailContent>
                  <DetailLabel>Opening Hours</DetailLabel>
                  <DetailValue>{detailData.openingHours}</DetailValue>
                </DetailContent>
              </DetailItem>
              
              <DetailItem>
                <DetailIcon><FiPhone /></DetailIcon>
                <DetailContent>
                  <DetailLabel>Phone</DetailLabel>
                  <DetailValue>{detailData.phone}</DetailValue>
                </DetailContent>
              </DetailItem>
              
              <DetailItem>
                <DetailIcon><FiGlobe /></DetailIcon>
                <DetailContent>
                  <DetailLabel>Website</DetailLabel>
                  <DetailValue>{detailData.website}</DetailValue>
                </DetailContent>
              </DetailItem>
            </DetailSection>
            
            <ActionButtons>
              <Button variant="primary" fullWidth>Add to Calendar</Button>
              <Button variant="secondary" fullWidth>Get Directions</Button>
            </ActionButtons>
          </>
        );
      
      case 'map':
        return (
          <>
            <MapPlaceholder>
              Map view will be displayed here
            </MapPlaceholder>
            
            <Card>
              <Card.Content>
                <DetailItem>
                  <DetailIcon><FiMapPin /></DetailIcon>
                  <DetailContent>
                    <DetailLabel>Address</DetailLabel>
                    <DetailValue>{detailData.location}</DetailValue>
                  </DetailContent>
                </DetailItem>
              </Card.Content>
            </Card>
            
            <ActionButtons>
              <Button variant="primary" fullWidth>Get Directions</Button>
              <Button variant="secondary" fullWidth>Save Location</Button>
            </ActionButtons>
          </>
        );
      
      case 'reviews':
        return (
          <Card>
            <Card.Content>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                No reviews available yet
              </div>
            </Card.Content>
          </Card>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <PanelContainer>
      <PanelHeader>
        <PanelTitle>Details</PanelTitle>
        <CloseButton onClick={toggleThirdPane}>
          <FiX />
        </CloseButton>
      </PanelHeader>
      
      <TabContainer>
        <Tab 
          active={activeTab === 'details'} 
          onClick={() => setActiveTab('details')}
        >
          Details
        </Tab>
        <Tab 
          active={activeTab === 'map'} 
          onClick={() => setActiveTab('map')}
        >
          Map
        </Tab>
        <Tab 
          active={activeTab === 'reviews'} 
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </Tab>
      </TabContainer>
      
      <PanelContent>
        {renderContent()}
      </PanelContent>
    </PanelContainer>
  );
};

export default DetailPanel;
