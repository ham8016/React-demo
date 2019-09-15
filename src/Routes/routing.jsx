import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from '../components/header';
import Contact from '../container/contact';
import Login from '../container/login';


function AppRouter() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
      </div>
      <Footer />
    </Router>
  );
}

export default AppRouter;