import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
