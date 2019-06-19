import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Admin from './Admin';


export default class AdminPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scheduleStatus: 'takingApplications',
		};
	};
  componentWillMount(){
    
  }
	render() {
		return (

      <Apply scheduleStatus={this.state.scheduleStatus} />
		);
	}
}

ReactDOM.render(<AdminPage />, document.getElementById('app'));
