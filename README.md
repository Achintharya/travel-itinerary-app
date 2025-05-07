# Travel Itinerary App

A React application for planning and managing travel itineraries. This app allows users to create personalized travel experiences, view trip details, and manage accommodations and activities.

## Features

- Onboarding flow for creating new trips
- Dashboard view with trip overview
- Flight details display
- Accommodation management
- Activities scheduling with calendar view
- Third pane detail view for additional information
- Dark/Light mode toggle
- Responsive design for various screen sizes
- Mock integrations with Google Maps and Calendar APIs

## Project Structure

```
src/
  assets/         # Images and static resources
  components/     # Reusable UI components
    ui/           # Basic UI components (Button, Card, Input, etc.)
    layout/       # Layout components (AppLayout)
    onboarding/   # Onboarding flow components
    dashboard/    # Dashboard view components
  contexts/       # React contexts for state management
  hooks/          # Custom React hooks
  pages/          # Page components
  services/       # API services (mock implementations)
  styles/         # Global styles and theme
  utils/          # Utility functions
```

## Component Hierarchy

```
App
├── ThemeProvider
├── AppProvider
│   ├── Onboarding
│   │   └── OnboardingScreen
│   │       ├── Input
│   │       ├── Select
│   │       └── Button
│   └── Dashboard
│       ├── AppLayout
│       │   ├── Header
│       │   ├── Content
│       │   │   ├── TripHeader
│       │   │   ├── FlightCard
│       │   │   ├── AccommodationSection
│       │   │   │   └── AccommodationCard
│       │   │   └── ActivitiesSection
│       │   │       ├── Calendar
│       │   │       └── ActivityCard
│       │   ├── SecondaryContent (Third Pane)
│       │   │   └── DetailPanel
│       │   └── Footer (Navigation)
│       └── UserAvatar
```

## State Management

The application uses React Context API for state management:

- **ThemeContext**: Manages the theme state (dark/light mode)
- **AppContext**: Manages the application state, including:
  - User information
  - Trip details
  - UI state (active tab, third pane visibility)
  - Form data for trip creation

## Mock Integrations

The application includes mock implementations for third-party integrations:

- **Google Maps API**: For location details, directions, and place search
- **Calendar API**: For managing trip events and activities

These mock services simulate API calls with delays and return realistic mock data.

## Responsive Design

The application is designed to be responsive across different screen sizes:

- Mobile: Single pane view with navigation
- Tablet: Two-pane view (main content + third pane when active)
- Desktop: Two-pane view with more space for content

## Third Pane Functionality

One of the key features of this application is the "third pane" functionality, which allows users to view detailed information about flights, accommodations, or activities without leaving the main dashboard. This is implemented using a responsive layout that adjusts based on screen size and the visibility state of the third pane.

## Challenges and Solutions

### Challenge 1: Responsive Layout with Third Pane

**Challenge**: Implementing a responsive layout that could accommodate the third pane on different screen sizes.

**Solution**: Used CSS Grid and Flexbox with conditional styling based on the third pane visibility state. On mobile devices, the third pane takes over the entire screen, while on larger screens it shares space with the main content.

### Challenge 2: State Management

**Challenge**: Managing complex state across multiple components, including user data, trip details, and UI state.

**Solution**: Implemented a centralized state management system using React Context API, with separate contexts for theme and application state. This allowed for clean separation of concerns and made it easy to access state from any component.

### Challenge 3: Mock API Integrations

**Challenge**: Simulating third-party API integrations without actual API access.

**Solution**: Created mock service modules that simulate API calls with realistic delays and return structured mock data. This approach allows for easy replacement with real API calls in the future.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Future Improvements

- Add authentication flow
- Implement real API integrations
- Add more interactive features like drag-and-drop for activities
- Enhance offline support
- Add multi-language support
- Implement more advanced search and filtering options.
