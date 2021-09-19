import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./redux/store";
import { Provider } from "react-redux";
import List from "./List/list";
import Search from "./Search/search";

function App() {
  return (
      <Router >
        <Provider store={store}>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Log in <small>Access without token only</small></NavLink>
            <NavLink activeClassName="active" to="/dashboard">Dashboard <small>Access with token only</small></NavLink>
            <NavLink activeClassName="active" to="/list">List </NavLink>
            <NavLink activeClassName="active" to="/search">Search </NavLink>
          </div>
          <div className="content">
            <switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/list" component={List}/>
              <Route exact path="/search" component={Search}/>
            </switch>
          </div>
        </Provider>
      </Router>
    
  );
}

export default App;
