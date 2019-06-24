import React, {Component} from 'react';
import {HrefLinks} from '../.././Utils/HrefLinks';
import Checkbox from './Checkbox';
import ApplicationForm from './ApplicationForm';
import {validateText, getApplicationErrors, validateCheckboxes} from '../.././Utils/Validation'
import { createHashHistory } from 'history'
import axios from 'axios';

//These are temp values that should come from a DataBase for the checkboxes
const DATES = ['june 28', 'june 29'];
const TIMES = ['12:00 AM - 2:00 AM','2:00 AM - 4:00 AM','4:00 AM - 6:00 AM','6:00 AM - 8:00 AM','8:00 AM - 10:00 AM','10:00 AM - 12:00 PM','12:00 PM - 2:00 PM','2:00 PM - 4:00 PM','4:00 PM - 6:00 PM','6:00 PM - 8:00 PM','8:00 PM - 10:00 PM','10:00 PM - 12:00 AM'];


export default class ApplicationsOpen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: '',
      times: '',
        discordName: "",
        donationIncentive: "",
        firstGame: "",
        secondGame: "",
        twitchName: "",
        twitterName: "",
        whatDoYouLike: "",
      backup: false,
      formErrors: {}
    };
  }

  componentWillMount() {
  this.setState({
    //Set the value of current event dates
    dates: DATES.reduce((dates, date) => ({
      ...dates,
      [date]: false
    }), {}),
    //Set the value of the current event times
    times: TIMES.reduce((times, time) => ({
      ...times,
      [time]: false
    }), {}),
    //Set all form Error Messages
    formErrors: getApplicationErrors()
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

  handleDateChange = (event) => {
        const name = event.target.name;
        this.setState({
            dates: {
              ...this.state.dates,
              [name]: !this.state.dates[name]
            }

          }, ()=>{
            this.setState({
              formErrors: {
                ...this.state.formErrors,
                dates: validateCheckboxes('dates', this.state.dates)
              }
            })
          })
      }

  handleTimeChange = (event) =>{
        const name  = event.target.name;
        this.setState({
            times:{
              ...this.state.times,
              [name]: !this.state.times[name]
            }
        }, ()=>{
          this.setState({
            formErrors: {
              ...this.state.formErrors,
              times: validateCheckboxes('times', this.state.times)
            }
          })

        })
      }

  handleBackupChange = (event) =>{
    this.setState({
        backup: !this.state.backup
    })
  }

  handleSubmit = async (submitEvent) =>{
    submitEvent.preventDefault();
    const self = this;
    const errorArr = getErrors();
    if(errorArr.length === 0){
      try{
        await axios
          .post('/apply', self.state)
          .then(function(res){
            // self.props.history.push('/');
            // window.scrollTo(0, 0);
            console.log(res)
        });
      } catch (error){
        console.log(error)
        //self.props.history.push('/apply-error');
        //window.scrollTo(0, 0);
      }
    }
    else{
      // Show Errors on bad inputs
      console.log(errorArr)
    }
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
      <section id="apps-open">
      <div className="faq">
        <h2>Applications are Open</h2>
        <div className="application-info">
          <p>The following form is for May event. Please fill out the form and make sure you are
          a member of <a href={HrefLinks.discord}>Discord</a> so that we may contact you.</p>
          <p>Retro inspired games (The Messenger, Cuphead, etc.) will be considered.
          However, all games are subject to the approval of RBP staff.  If you apply with Metroid and
           you've never beaten it, your application may be denied.  Applicants must be 18 years of age
           and a Twitch Affiliate. </p>
          <p>The more dates and times you are available, the higher your chance of getting in is.
          If you only apply for one date with only a four hour window, it'll be difficult to fit you in.</p>
          <p>We look forward to reviewing your application!</p>
        </div>
      </div>
      <ApplicationForm
      times={TIMES}
      dates={DATES}
      backup={this.state.backup}
      handleSubmit={this.handleSubmit}
      handleTextChange={this.handleTextChange}
      handleDateChange={this.handleDateChange}
      handleTimeChange={this.handleTimeChange}
      handleBackupChange={this.handleBackupChange}
      />
      </section>
    );
  }

}
