import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Friends from "./components/pages/Home";
import FriendForm from "./components/pages/AddFriend";
import Nav from "./components/nav/nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Friends} />
      <Route exact path="/form" component={FriendForm} />
    </Router>
  );
}

export default App;
