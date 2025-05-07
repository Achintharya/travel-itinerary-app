# Travel Itinerary App - Project Documentation

## Project Overview

This project is a React-based Travel Itinerary application that allows users to plan and manage their travel experiences. The application features an onboarding flow for creating new trips, a dashboard for viewing trip details, and a third pane for displaying detailed information about flights, accommodations, and activities.

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

## Key Components and Their Props

### UI Components

#### Button
- `variant`: 'primary' | 'secondary' | 'text' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `fullWidth`: boolean (default: false)
- `disabled`: boolean (default: false)
- `onClick`: function
- `children`: React.ReactNode

#### Card
- `variant`: 'default' | 'outlined' (default: 'default')
- `clickable`: boolean (default: false)
- `fullWidth`: boolean (default: false)
- `padding`: string
- `marginBottom`: string
- `onClick`: function
- `children`: React.ReactNode

#### Input
- `label`: string
- `placeholder`: string
- `value`: string
- `onChange`: function
- `type`: string (default: 'text')
- `error`: string
- `disabled`: boolean
- `fullWidth`: boolean
- `startIcon`: React.ReactNode
- `endIcon`: React.ReactNode
- `marginBottom`: string

#### Select
- `label`: string
- `options`: Array<{value: string, label: string}>
- `value`: string
- `onChange`: function
- `placeholder`: string (default: 'Select an option')
- `error`: string
- `disabled`: boolean
- `fullWidth`: boolean
- `marginBottom`: string

### Layout Components

#### AppLayout
- `children`: React.ReactNode
- `secondaryContent`: React.ReactNode

### Dashboard Components

#### TripHeader
No props, uses context for data

#### FlightCard
No props, uses context for data

#### AccommodationSection
No props, uses context for data

#### ActivitiesSection
No props, uses context for data

#### DetailPanel
No props, uses context for data

## State Management

The application uses React Context API for state management:

- **ThemeContext**: Manages the theme state (dark/light mode)
- **AppContext**: Manages the application state, including:
  - User information
  - Trip details
  - UI state (active tab, third pane visibility)
  - Form data for trip creation

## Third Pane Functionality

One of the key requirements of this project was to implement a "click to open third pane" functionality. This was achieved using a responsive layout that adjusts based on screen size and the visibility state of the third pane.

The implementation includes:
1. A state variable `isThirdPaneOpen` in the AppContext
2. A toggle function `toggleThirdPane` to show/hide the third pane
3. Conditional styling in the AppLayout component that adjusts the width of the main content and secondary content based on the third pane visibility
4. Responsive behavior that adapts to different screen sizes

On desktop and tablet screens, the third pane shares space with the main content when open. On mobile screens, the third pane takes over the entire screen when open.

## Mock Integrations

The application includes mock implementations for third-party integrations:

- **Google Maps API**: For location details, directions, and place search
- **Calendar API**: For managing trip events and activities

These mock services simulate API calls with delays and return realistic mock data, demonstrating how the application would integrate with external services in a production environment.

## Challenges Faced

### Challenge 1: Responsive Layout with Third Pane

**Challenge**: Implementing a responsive layout that could accommodate the third pane on different screen sizes while maintaining a good user experience.

**Solution**: Used CSS Grid and Flexbox with conditional styling based on the third pane visibility state. On mobile devices, the third pane takes over the entire screen, while on larger screens it shares space with the main content. This approach ensures that the content remains readable and accessible regardless of the screen size.

### Challenge 2: State Management

**Challenge**: Managing complex state across multiple components, including user data, trip details, and UI state.

**Solution**: Implemented a centralized state management system using React Context API, with separate contexts for theme and application state. This allowed for clean separation of concerns and made it easy to access state from any component without prop drilling.

### Challenge 3: Mock API Integrations

**Challenge**: Simulating third-party API integrations without actual API access.

**Solution**: Created mock service modules that simulate API calls with realistic delays and return structured mock data. This approach allows for easy replacement with real API calls in the future while providing a realistic user experience during development and testing.

### Challenge 4: Component Reusability

**Challenge**: Designing components that are reusable across different parts of the application while maintaining flexibility.

**Solution**: Created a set of base UI components with configurable props that can be composed to build more complex components. This approach reduced code duplication and ensured consistency throughout the application.

## Future Improvements

- Add authentication flow
- Implement real API integrations
- Add more interactive features like drag-and-drop for activities
- Enhance offline support
- Add multi-language support
- Implement more advanced search and filtering options
