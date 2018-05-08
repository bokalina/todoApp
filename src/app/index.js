import React from 'react';
import { HashRouter, BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import './index.css';

import Home from '../containers/home';
import Login from '../containers/login';
import UserDetail from '../components/userdetail';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (<HashRouter>
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/users" component={UserDetail} />
                    <Route component={NotFound} />
                    </Switch>
                </HashRouter>
                
            );
    }

}

const NotFound = () => (
  <h1>404.. This page is not found!</h1>);

export default App