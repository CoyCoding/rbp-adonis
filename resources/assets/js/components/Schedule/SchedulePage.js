import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Schedule from './Schedule';



export default class SchedulePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scheduleStatus: 'takingApplications',
			eventDate: ''
		};
	};

	scheduleStatusChange = (event) => {
			this.setState({
				scheduleStatus: event.target.value
			});
	};

	render() {
		return (

      <Schedule scheduleStatus={this.state.scheduleStatus} scheduleStatusChange={this.scheduleStatusChange}/>
		);
	}
}

ReactDOM.render(<SchedulePage />, document.getElementById('app'));
