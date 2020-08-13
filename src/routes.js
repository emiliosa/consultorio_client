import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import MainPage from './components/MainPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="/some/where" component={GalleryPage} />
    <Route path="/some/otherpage" component={ContactPage} />
  </Route>
);