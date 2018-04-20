import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Button from './components/button';
import Email from './components/email';
import Password from './components/password'; 


class App extends React.Component{


	render(){
		return(
				<form>
					<Email/>
    				<Password/>
    				<Button/>
				</form>
			);
	}
}

export default App