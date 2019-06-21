const validationMessages =
{
  discordName: "We need you to have a discord for event information",
  firstGame: "You have to have a game to play",
  secondGame: "You have to have a back up game",
  twitchName: "We need your twitch name to check out your content",
  whatDoYouLike: "Come on, at least say you think FTC is sexy",
  dates: "We need to know what day(s) you are available",
  times:"You need to have at least available time slot",
  twitterName: '',
  donationIncentive: ''
}

export function getApplicationErrors(){
  return validationMessages;
}

export function validateText(textFormName, textFormValue){
  //return empty string for no error
  if (textFormValue) {
    return '';
  //else add form Error message
  } else {
    return validationMessages[textFormName];
  }
}

export function validateCheckboxes(checkboxGroupName, checkboxGroup){
  //For each checkbox in group, if at least one is true validate
  if(Object.keys(checkboxGroup).find((checkbox)=>{
    return checkboxGroup[checkbox] === true;}))
    {
    return '';
    //else return error message
  }else{
    return validationMessages[checkboxGroupName];
  }
}
