// Mock Google Maps API Service

// Mock API key (in a real app, this would be stored in environment variables)
const API_KEY = 'mock-google-maps-api-key';

/**
 * Mock function to get location details
 * @param {string} placeId - The Google Maps place ID
 * @returns {Promise} - Promise that resolves with location details
 */
export const getPlaceDetails = async (placeId) => {
  // In a real app, this would make an API call to Google Maps API
  console.log(`Fetching place details for ${placeId} with API key ${API_KEY}`);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock response data
  const mockPlaces = {
    'tokyo-sensoji': {
      name: 'Sensoji Temple',
      formatted_address: '2-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan',
      geometry: {
        location: {
          lat: 35.7147,
          lng: 139.7966,
        },
      },
      photos: [
        {
          photo_reference: 'mock-photo-reference',
          width: 4000,
          height: 3000,
        },
      ],
      opening_hours: {
        weekday_text: [
          'Monday: 6:00 AM – 5:00 PM',
          'Tuesday: 6:00 AM – 5:00 PM',
          'Wednesday: 6:00 AM – 5:00 PM',
          'Thursday: 6:00 AM – 5:00 PM',
          'Friday: 6:00 AM – 5:00 PM',
          'Saturday: 6:00 AM – 5:00 PM',
          'Sunday: 6:00 AM – 5:00 PM',
        ],
      },
      rating: 4.7,
      website: 'https://www.senso-ji.jp/',
    },
    'tokyo-skytree': {
      name: 'Tokyo Skytree',
      formatted_address: '1-1-2 Oshiage, Sumida City, Tokyo 131-0045, Japan',
      geometry: {
        location: {
          lat: 35.7101,
          lng: 139.8107,
        },
      },
      photos: [
        {
          photo_reference: 'mock-photo-reference',
          width: 4000,
          height: 3000,
        },
      ],
      opening_hours: {
        weekday_text: [
          'Monday: 10:00 AM – 9:00 PM',
          'Tuesday: 10:00 AM – 9:00 PM',
          'Wednesday: 10:00 AM – 9:00 PM',
          'Thursday: 10:00 AM – 9:00 PM',
          'Friday: 10:00 AM – 9:00 PM',
          'Saturday: 10:00 AM – 9:00 PM',
          'Sunday: 10:00 AM – 9:00 PM',
        ],
      },
      rating: 4.6,
      website: 'http://www.tokyo-skytree.jp/en/',
    },
  };
  
  if (mockPlaces[placeId]) {
    return mockPlaces[placeId];
  } else {
    throw new Error('Place not found');
  }
};

/**
 * Mock function to get directions between two locations
 * @param {Object} origin - The origin location {lat, lng}
 * @param {Object} destination - The destination location {lat, lng}
 * @param {string} mode - The travel mode (driving, walking, bicycling, transit)
 * @returns {Promise} - Promise that resolves with directions data
 */
export const getDirections = async (origin, destination, mode = 'driving') => {
  // In a real app, this would make an API call to Google Maps Directions API
  console.log(`Getting directions from ${JSON.stringify(origin)} to ${JSON.stringify(destination)} via ${mode}`);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock response data
  return {
    routes: [
      {
        legs: [
          {
            distance: { text: '3.2 km', value: 3200 },
            duration: { text: '12 mins', value: 720 },
            steps: [
              {
                distance: { text: '1.2 km', value: 1200 },
                duration: { text: '4 mins', value: 240 },
                instructions: 'Head east on Main St',
                travel_mode: mode.toUpperCase(),
              },
              {
                distance: { text: '2.0 km', value: 2000 },
                duration: { text: '8 mins', value: 480 },
                instructions: 'Turn right onto Broadway',
                travel_mode: mode.toUpperCase(),
              },
            ],
          },
        ],
      },
    ],
  };
};

/**
 * Mock function to search for places
 * @param {string} query - The search query
 * @param {Object} location - The location to search near {lat, lng}
 * @param {number} radius - The search radius in meters
 * @returns {Promise} - Promise that resolves with search results
 */
export const searchPlaces = async (query, location, radius = 5000) => {
  // In a real app, this would make an API call to Google Maps Places API
  console.log(`Searching for "${query}" near ${JSON.stringify(location)} within ${radius}m`);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  // Mock response data
  return {
    results: [
      {
        place_id: 'tokyo-sensoji',
        name: 'Sensoji Temple',
        vicinity: 'Asakusa, Taito City, Tokyo',
        geometry: {
          location: {
            lat: 35.7147,
            lng: 139.7966,
          },
        },
        rating: 4.7,
      },
      {
        place_id: 'tokyo-skytree',
        name: 'Tokyo Skytree',
        vicinity: 'Oshiage, Sumida City, Tokyo',
        geometry: {
          location: {
            lat: 35.7101,
            lng: 139.8107,
          },
        },
        rating: 4.6,
      },
    ],
  };
};

export default {
  getPlaceDetails,
  getDirections,
  searchPlaces,
};
