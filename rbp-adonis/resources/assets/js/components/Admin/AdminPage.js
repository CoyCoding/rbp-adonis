import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//import Admin from './Admin';


export default class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scheduleStatus: 'takingApplications',

		};
	};
  componentWillMount(){

  }
	render() {
    console.log(this.props.sessionId)
		return (
      <h1 style={{marginTop: '56px'}}>test {this.props.sessionId}</h1>
		);
	}
}

//ReactDOM.render(<AdminPage />, document.getElementById('app'));
