'use strict'
const Database = use('Database');
const Application = use('App/Models/Application');
const AvailableTime = use('App/Models/AvailableTime');
const AvailableDate = use('App/Models/AvailableDate');

class ApplicationController {
  async index({view}){
    const appStatus = 'takingApplications';
    if(appStatus != 'takingApplications'){
      return view.render('welcome', {appStatus: appStatus});
    }else{
          return view.render('welcome', {appStatus: appStatus});
    }

  }

  //web Api for form submition with auto csrf
  async store({request, response}){
    const activeEventId = 1;
    const formData = request.post();
    //create applicationData from form
    const applicationData = {
      twitch_name: formData.twitchName,
      twitter_name: formData.twitterName,
      discord_name:  formData.discordName,
      game_1:  formData.firstGame,
      game_2:  formData.secondGame,
      donation_incentive: formData.donationIncentive,
      info: formData.whatDoYouLike,
      backup: formData.backup,
      event_id: formData.activeEventId
    }
    try{
      const dbTrx = await Database.beginTransaction();

      //post applicationData and store the for the created id
      const applicationDbData = await Application.create(applicationData, dbTrx);

      //create the availableDate objects for the db with the returned id
      const availableDates = buildDateSchema(formData.dates, applicationDbData.id);
      const availableTimes = buildTimeSchema(formData.times, applicationDbData.id);

      //post availableDates and Times
      await AvailableDate.createMany(availableDates, dbTrx);
      await AvailableTime.createMany(availableTimes, dbTrx);

      dbTrx.commit();
    }catch (error){
      //console.log(error)
      return 'error';
    }

    function buildDateSchema(datesMap, id){
        //for each key in dateMap
        return Object.keys(datesMap)
        //only return keys that are true
          .filter(date=> formData.dates[date] === true).map((date)=>{
            //return db date schema from the date key and app_id
            return {date: date, application_id: id}
        });
      }

    function buildTimeSchema(timeMap, id){
          //for each key in dateMap
          return Object.keys(timeMap)
          //only return keys that are true
            .filter(time=> formData.times[time] === true).map((time)=>{
              //return db date schema from the date key and app_id
              return {time: time, application_id: id}
          });
        }
  }
}

module.exports = ApplicationController
