import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import LightTheme from './themes/LightTheme';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <BrowserRouter>
        {/* Todo: Add navigation and routing features */}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
