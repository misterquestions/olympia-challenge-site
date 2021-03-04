import React, { Suspense } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LightTheme from './themes/LightTheme';
import IndexPage from './pages/IndexPage';
import Login from './pages/Login';
import Register from './pages/Register';
import ItemDetails from './pages/ItemDetails';
import PayForm from './pages/PayForm';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import './plugins/main';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <Suspense fallback="loading">
      <ThemeProvider theme={LightTheme}>
        <CssBaseline />
        {/* Todo: Add navigation with links of react router */}
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/" exact component={IndexPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/item-detail" component={ItemDetails} />
              <Route exact path="/pay-form" component={PayForm} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </BrowserRouter>
        {/* Todo: Add footer section */}
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
