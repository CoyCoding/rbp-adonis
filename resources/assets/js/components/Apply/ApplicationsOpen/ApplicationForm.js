import React from 'react';
import Checkbox from './Checkbox';

export function ApplicationForm(props){

  const createDateCheckbox = date => (
        <Checkbox
          label={date}
          isSelected={props.dates[date]}
          onCheckboxChange={props.handleDateChange}
          key={date}
        />
      );

  const createTimeCheckbox = time => (
        <Checkbox
          label={time}
          isSelected={props.times[time]}
          onCheckboxChange={props.handleTimeChange}
          key={time}
        />
      );

  const createBackupCheckbox = backup => (
    <Checkbox
      label='yes'
      isSelected={props.backup}
      onCheckboxChange={props.handleBackupChange}
      />
  );

  const createDateCheckboxes = () => props.dates.map(createDateCheckbox);
  const createTimeCheckboxes = () => props.times.map(createTimeCheckbox);

  return(
    <div className="application-form">
      <div className="form-header">
        <h5>Please complete the form below</h5>
        <h5>*indicates a required field</h5>
      </div>
      <div className="form-wrapper">
        <form onSubmit={props.handleSubmit}>
          <div className="form-item">
            <label htmlFor="twitchName">Twitch Link*</label>
            <p className="description">Your profile name exactly as it appears on twitch.</p>
            <input name="twitchName" onChange={props.handleTextChange} type="text" placeholder="https://www.twitch.tv/Batman"/>
          </div>
          <div className="form-item">
            <label htmlFor="discordName">Discord Name*</label>
            <p className="description">Please make sure you've joined the official RBP Discord so we can message you easily.</p>
            <input name="discordName"  onChange={props.handleTextChange} type="text" placeholder="Batman"/>
          </div>
          <div className="form-item">
            <label htmlFor="twitterName">Twitter Name</label>
            <p className="description">Please enter your Twitter name so we may easily find and @ you during your segment.</p>
            <input name="twitterName"  onChange={props.handleTextChange} type="text" placeholder="Batman"/>
          </div>
          <div className="form-item">
            <label htmlFor="firstGame">Game 1*</label>
            <p className="description">The first game you will play during your segment.</p>
            <input name="firstGame"  onChange={props.handleTextChange} type="text" placeholder="Super Mario Bro. 2 BBy"/>
          </div>
          <div className="form-item">
            <label htmlFor="secondGame">Game 2*</label>
            <p className="description">The second game you will play during your segment.</p>
            <input name="secondGame"  onChange={props.handleTextChange} type="text" placeholder="Super Mario Bros. 2 again BBy"/>
          </div>
          <div className="form-item">
            <h5>Available Dates*</h5>
            <div className="checkbox-section">
                {createDateCheckboxes()}
            </div>
          </div>
          <div className="form-item">
            <h5>Available Times*</h5>
            <p className="description">All Times are in Eastern Time, the more availability you have, the higher chance you have to get into the event!</p>
            <div className="checkbox-section">
              {createTimeCheckboxes()}
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="donationIncentive">Donation Incentive</label>
            <input name="donationIncentive"  onChange={props.handleTextChange} type="text" placeholder="Super Mario Bros. 2 again BBy"/>
          </div>
          <div className="form-item">
            <label htmlFor="whatDoYouLike">Why would you like to participate in RetroBlockParty? *</label>
            <textarea name="whatDoYouLike"  onChange={props.handleTextChange} type="text" placeholder="I like the food"/>
          </div>
          <div className="form-item">
            <h5>Would you be willing to be available as a backup streamer?</h5>
            <div className="checkbox-section">
                {createBackupCheckbox()}
            </div>
            </div>
            <button name="submint" type="submit" > submit</button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;
