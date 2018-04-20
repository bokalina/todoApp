import React from 'React';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Button from "./components/button";
import Email from "./components/email";
import Password from "./components/password";


class App extends React.Component {

render(){ 


    return (


    <div class="Home">



    

     
<Email/>
<Password/>

<Button/>



    </div>





);



    }
}


  export default App;