// Mock Calendar API Service

// Mock API key (in a real app, this would be stored in environment variables)
const API_KEY = 'mock-calendar-api-key';

/**
 * Mock function to get user calendars
 * @returns {Promise} - Promise that resolves with user calendars
 */
export const getUserCalendars = async () => {
  // In a real app, this would make an API call to Google Calendar API
  console.log(`Fetching user calendars with API key ${API_KEY}`);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock response data
  return {
    items: [
      {
        id: 'primary',
        summary: 'My Calendar',
        description: 'Primary Calendar',
        timeZone: 'Asia/Tokyo',
        colorId: '1',
      },
      {
        id: 'travel',
        summary: 'Travel',
        description: 'Travel Calendar',
        timeZone: 'Asia/Tokyo',
        colorId: '2',
      },
      {
        id: 'work',
        summary: 'Work',
        description: 'Work Calendar',
        timeZone: 'Asia/Tokyo',
        colorId: '3',
      },
    ],
  };
};

/**
 * Mock function to add an event to a calendar
 * @param {string} calendarId - The calendar ID
 * @param {Object} event - The event details
 * @returns {Promise} - Promise that resolves with the created event
 */
export const addEvent = async (calendarId, event) => {
  // In a real app, this would make an API call to Google Calendar API
  console.log(`Adding event to calendar ${calendarId} with API key ${API_KEY}`);
  console.log('Event details:', event);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  // Mock response data (return the event with an ID)
  return {
    ...event,
    id: `event-${Date.now()}`,
    status: 'confirmed',
    htmlLink: `https://calendar.google.com/calendar/event?eid=mock-event-id`,
  };
};

/**
 * Mock function to get events from a calendar
 * @param {string} calendarId - The calendar ID
 * @param {string} timeMin - The start time (ISO string)
 * @param {string} timeMax - The end time (ISO string)
 * @returns {Promise} - Promise that resolves with calendar events
 */
export const getEvents = async (calendarId, timeMin, timeMax) => {
  // In a real app, this would make an API call to Google Calendar API
  console.log(`Fetching events from calendar ${calendarId} with API key ${API_KEY}`);
  console.log(`Time range: ${timeMin} to ${timeMax}`);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  // Mock response data
  return {
    items: [
      {
        id: 'event-1',
        summary: 'Flight to Tokyo',
        description: 'DEL to HND',
        location: 'Tokyo International Airport',
        start: {
          dateTime: '2025-05-27T10:00:00+09:00',
          timeZone: 'Asia/Tokyo',
        },
        end: {
          dateTime: '2025-05-27T22:30:00+09:00',
          timeZone: 'Asia/Tokyo',
        },
      },
      {
        id: 'event-2',
        summary: 'Sensoji Temple Visit',
        description: 'Visit to Sensoji Temple and Nakamise Shopping Street',
        location: '2-3-1 Asakusa, Taito City, Tokyo',
        start: {
          dateTime: '2025-05-28T13:00:00+09:00',
          timeZone: 'Asia/Tokyo',
        },
        end: {
          dateTime: '2025-05-28T15:00:00+09:00',
          timeZone: 'Asia/Tokyo',
        },
      },
      {
        id: 'event-3',
        summary: 'Tokyo Sky Tree',
        description: 'Visit to Tokyo Sky Tree',
        location: '1-1-2 Oshiage, Sumida City, Tokyo',
        start: {
          dateTime: '2025-05-29T11:00:00+09:00',
          timeZone: 'Asia/Tokyo',
        },
        end: {
          dateTime: '2025-05-29T12:30:00+09:00',
          timeZone: 'Asia/Tokyo',
        },
      },
    ],
  };
};

/**
 * Mock function to update an event
 * @param {string} calendarId - The calendar ID
 * @param {string} eventId - The event ID
 * @param {Object} event - The updated event details
 * @returns {Promise} - Promise that resolves with the updated event
 */
export const updateEvent = async (calendarId, eventId, event) => {
  // In a real app, this would make an API call to Google Calendar API
  console.log(`Updating event ${eventId} in calendar ${calendarId} with API key ${API_KEY}`);
  console.log('Updated event details:', event);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  // Mock response data
  return {
    ...event,
    id: eventId,
    status: 'confirmed',
    updated: new Date().toISOString(),
  };
};

/**
 * Mock function to delete an event
 * @param {string} calendarId - The calendar ID
 * @param {string} eventId - The event ID
 * @returns {Promise} - Promise that resolves when the event is deleted
 */
export const deleteEvent = async (calendarId, eventId) => {
  // In a real app, this would make an API call to Google Calendar API
  console.log(`Deleting event ${eventId} from calendar ${calendarId} with API key ${API_KEY}`);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock response (empty response indicates success)
  return {};
};

export default {
  getUserCalendars,
  addEvent,
  getEvents,
  updateEvent,
  deleteEvent,
};
