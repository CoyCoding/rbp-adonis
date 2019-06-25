import React, {Component} from 'react';
import Header from '.././Header/Header.js';
import axios from 'axios';
import cookies from 'js-cookies';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      formErrors: {
        username: '',
        password: ''
      },
      token: ''
    };
  }

  componentWillMount() {
  this.setState({

  })
}

  handleTextChange = (event) => {
    const name = event.target.name;
    //set state of current textbox to user input
    this.setState({
        [name]: event.target.value
    //set the error state based on the new state
    //Maybe change to on submit
    }, () => {
      this.setState({
        formErrors: {
          ...this.state.formErrors,
          [name]: validateText(name, this.state[name])
        }
      })
  })
}

  handleSubmit = async (submitEvent) =>{
    submitEvent.preventDefault();
    const self = this;
    const { match, location, history } = this.props;
    //const errorArr = getErrors();

    if(1){
      try{
        await axios
          .post('/admin/login', self.state)
          .then(function(res){
            cookies.setItem('jwt', JSON.stringify(res.data))
            history.push('/admin')
        });
      } catch (error){
        console.log(error)
        //self.props.history.push('/apply-error');
        //window.scrollTo(0, 0);
      }
    }
    else{
      console.log('errorArr')
    }

    function getErrors() {
      //for each input name in form errors filter and return all inputs with errors
      return Object.keys(self.state.formErrors)
        .filter((error) => {
          return self.state.formErrors[error].length > 0
        })
    }
  }

  handleSubmitLogout = async (submitEvent) =>{
    submitEvent.preventDefault();
    const self = this;
    console.log(this.state)
    cookies.removeItem('jwt')

    function getErrors() {
      //for each input name in form errors filter and return all inputs with errors
      return Object.keys(self.state.formErrors)
        .filter((error) => {
          return self.state.formErrors[error].length > 0
        })
    }
  }


  render(){
    return (
      <section id="login">
        <div className="login-wrapper">
          <form onSubmit={this.handleSubmit}>
          <label>Username:  </label>
          <input name="username" onChange={this.handleTextChange} type="text" placeholder="Batman"/>
          <label>Password:</label>
          <input name="password" onChange={this.handleTextChange} type="text" placeholder=""/>
          <button type="submit">test</button>
          </form>
        </div>
        <form onSubmit={this.handleSubmitLogout}>
        <button type="submit">test</button>
        </form>

      </section>
    );
  }
}
