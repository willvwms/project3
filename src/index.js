import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Router, Route, browserHistory } from 'react-router';


ReactDOM.render(
<div>
  <Router path='/' history={browserHistory}>
	    <Route path="/app" component={App} />
	    <Route path='/signin' component={SignIn}/>
	    <Route path='/signup' component={SignUp}/>
  </Router>
</div>
  , document.getElementById('root')
)