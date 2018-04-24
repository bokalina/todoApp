import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import './index.css';

import Home from '../containers/home';
import Login from '../containers/login';


class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (<Router>
                    <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route component={NotFound} />
                    </Switch>
                </Router>
                
            );
    }

}

const NotFound = () => (
  <h1>404.. This page is not found!</h1>);

export default App