import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Schedule from './Schedule/Schedule';
import Apply from './Apply/Apply';
import Login from './Login/Login';
import Admin from './Admin/AdminPage';


export default class App extends Component {
	constructor() {
		super();
		this.state = {
			sessionId: '',
			scheduleStatus: 'takingApplications',
			eventDate: ''
		};
	};

	sessionIdChange = (id) =>{
		this.setState({
			sessionId: id
		}, ()=>{console.log(this.state.sessionId)});
	}

	scheduleStatusChange = (event) => {
			this.setState({
				scheduleStatus: event.target.value
			});
	};

	render() {
		return (

      <Router>
				<div>
				<Header/>
				<Switch>

					<Route exact  path="/" component={Home} />
					<Route exact path="/schedule" render={props =>
						<Schedule {...props} scheduleStatus={this.state.scheduleStatus} scheduleStatusChange={this.scheduleStatusChange}/>
					}
						/>
						<Route exact path="/apply" render={props =>
							<Apply {...props} scheduleStatus={this.state.scheduleStatus} scheduleStatusChange={this.scheduleStatusChange}/>
						}
							/>
							<Route exact path="/login" render={props =>
								<Login {...props} sessionId={this.state.sessionId} sessionChange={this.sessionIdChange} scheduleStatus={this.state.scheduleStatus} scheduleStatusChange={this.scheduleStatusChange}/>
							}
								/>
								<Route exact path="/admin" render={props =>
									<Admin {...props} scheduleStatus={this.state.scheduleStatus} scheduleStatusChange={this.scheduleStatusChange}/>
								}
									/>
							<Route component={NotFound}/>
				</Switch>
				 </div>
      </Router>
		);
	}
}
