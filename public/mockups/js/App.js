import React from "react";
import Login from "./Login";
import Test from "./Test";

import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={["/login", "/"]}>
          <Login />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
      </Switch>
    );
  }
}
// ResultList
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { PostList } from './posts';

const App = () => (
    <Admin dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList} />
    </Admin>
);

export default App;