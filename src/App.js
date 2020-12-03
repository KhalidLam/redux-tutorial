import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";

import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";
import SinglePost from "./pages/SinglePost";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={DashboardPage} />
        <Route exact path='/posts' component={PostsPage} />
        <Route exact path='/posts/:id' component={SinglePost} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
