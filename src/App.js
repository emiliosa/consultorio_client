import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/** images */
import logo from './logo.svg';

/** css */
import './App.css';

/** pages */
import Home from './pages/home';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import Patient from './pages/patient';
import Professional from './pages/professional';
import Profile from './pages/profile';
import Error from './pages/error';
import Navigation from './components/navigation';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/patient" component={Patient} />
        <Route path="/professional" component={Professional} />
        <Route path="/profile" component={Profile} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
