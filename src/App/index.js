import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from "../pages/Start";
import Results from "../pages/Results";
import Details from "../pages/Details";

const Index = () => (
  <>
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/items" component={Results} />
          <Route exact path="/items/:id" component={Details} />
          <Route path="/" component={Start} />
        </Switch>
      </main>
    </Router>
  </>
);

export default Index;
