import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppProvider } from './contexts/AppContext';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <StyledThemeProvider theme={theme}>
          <GlobalStyles />
          <Router>
            <Routes>
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Navigate to="/onboarding" replace />} />
            </Routes>
          </Router>
        </StyledThemeProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
