import React, { Suspense } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LightTheme from './themes/LightTheme';
import IndexPage from './pages/IndexPage';
import './plugins/main';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <Suspense fallback="loading">
      <ThemeProvider theme={LightTheme}>
        <CssBaseline />
        {/* Todo: Add navigation with links of react router */}
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={IndexPage} />
          </Switch>
        </BrowserRouter>
        {/* Todo: Add footer section */}
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
