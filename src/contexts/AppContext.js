import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // User state
  const [user, setUser] = useState(null);
  
  // Trip state
  const [trip, setTrip] = useState(null);
  
  // Form data for trip creation
  const [tripFormData, setTripFormData] = useState({
    destination: '',
    duration: '',
    travelingWith: '',
  });
  
  // UI state
  const [isThirdPaneOpen, setIsThirdPaneOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null); // Keeping for future error handling
  
  // Mock user data
  useEffect(() => {
    // Simulate user login
    setUser({
      name: 'Darshika',
      email: 'darshika@example.com',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    });
    
    // Simulate trip data
    setTrip({
      destination: 'Tokyo',
      startDate: '27.05.2025',
      endDate: '02.06.2025',
      flight: {
        departure: {
          airport: 'DEL',
          city: 'Delhi',
          date: '27.05.2025',
          time: '10:00 am',
        },
        arrival: {
          airport: 'HND',
          city: 'Tokyo',
          date: '27.05.2025',
          time: '10:30 pm',
        },
      },
      accommodation: [
        {
          name: 'Shinagawa Prince Hotel',
          checkIn: '27.05.2025',
          checkOut: '02.06.2025',
          address: '4-10-30 Takanawa, Minato-ku, Tokyo',
          price: '$99',
          image: 'hotelExterior1',
          nights: '6 nights',
          confirmed: true,
        },
        {
          name: 'Keio Plaza Hotel',
          checkIn: '27.05.2025',
          checkOut: '02.06.2025',
          address: '2-2-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo',
          price: '$120',
          image: 'hotelExterior2',
          nights: '6 nights',
          confirmed: false,
        },
      ],
      activities: [
        {
          name: 'Sensoji Temple & Nakamise Shopping Street',
          date: '28.05.2025',
          time: 'Anytime before 5:00pm',
          duration: '2 hours',
          location: '2-3-1 Asakusa, Taito City, Tokyo',
          image: 'sensoji',
        },
        {
          name: 'Tokyo Sky Tree',
          date: '29.05.2025',
          time: '11:00 am Afternoon',
          duration: '1.5 hours',
          location: '1-1-2 Oshiage, Sumida City, Tokyo',
          image: 'skyTree',
        },
        {
          name: 'Kimono Wearing',
          date: '30.05.2025',
          time: 'Anytime before 6:00pm',
          duration: '1.5 hours',
          location: 'Asakusa, Tokyo',
          image: 'kimonoWearing',
        },
      ],
    });
  }, []);
  
  // Update trip form data
  const updateTripFormData = (field, value) => {
    setTripFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };
  
  // Create new trip
  const createTrip = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setTrip({
        destination: tripFormData.destination,
        startDate: '27.05.2025',
        endDate: '02.06.2025',
        flight: {
          departure: {
            airport: 'DEL',
            city: 'Delhi',
            date: '27.05.2025',
            time: '10:00 am',
          },
          arrival: {
            airport: 'HND',
            city: tripFormData.destination,
            date: '27.05.2025',
            time: '10:30 pm',
          },
        },
        accommodation: [],
        activities: [],
      });
      
      setLoading(false);
      setTripFormData({
        destination: '',
        duration: '',
        travelingWith: '',
      });
    }, 1000);
  };
  
  // Toggle third pane
  const toggleThirdPane = () => {
    setIsThirdPaneOpen(prev => !prev);
  };
  
  return (
    <AppContext.Provider
      value={{
        user,
        trip,
        tripFormData,
        updateTripFormData,
        createTrip,
        isThirdPaneOpen,
        toggleThirdPane,
        activeTab,
        setActiveTab,
        loading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
