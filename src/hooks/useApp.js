import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { ThemeContext } from '../contexts/ThemeContext';

export const useApp = () => {
  const appContext = useContext(AppContext);
  const themeContext = useContext(ThemeContext);
  
  if (!appContext) {
    throw new Error('useApp must be used within an AppProvider');
  }
  
  if (!themeContext) {
    throw new Error('useApp must be used within a ThemeProvider');
  }
  
  return {
    ...appContext,
    ...themeContext,
  };
};
