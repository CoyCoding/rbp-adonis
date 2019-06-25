import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import cookies from 'js-cookies';
//import Admin from './Admin';


export default class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scheduleStatus: 'takingApplications',

		};
	};
  componentWillMount(){
		if(cookies.getItem('jwt')){
			console.log('yes')
		}else{
			console.log('no')
		}
  }
	render() {
		return (
      <h1 style={{marginTop: '56px'}}>test {this.props.sessionId}</h1>
		);
	}
}

//ReactDOM.render(<AdminPage />, document.getElementById('app'));
