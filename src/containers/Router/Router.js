import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import App from 'containers/App/App';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/info" render={() => <App view="info" />} />
      <Route
        exact
        path="/:uid"
        render={({ match }) => <App caseStudyUid={match.params.uid} view="caseStudy" />}
      />
      <Route path="/" render={() => <App view="home" />} />
    </Switch>
  </BrowserRouter>
);

export default Router;