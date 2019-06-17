import React from 'react';
import ApplicationsOpen from './ApplicationsOpen/ApplicationsOpen';
import ApplicationsClosed from './ApplicationsClosed/ApplicationsClosed';
import Header from '.././Header/Header.js';

export function Apply(props) {
  return (
    <section id="applications">
      <Header/>
      <div className="applications-wrapper">
      {handleScheduleStatus(props.scheduleStatus)}
      </div>
    </section>
  );
}

export const handleScheduleStatus = (scheduleStatus) =>{
  switch(scheduleStatus){
    case 'takingApplications':
    return(
      <ApplicationsOpen />
    )
    default:
    return(
      <ApplicationsClosed />
    )
  }
}

export default Apply;
