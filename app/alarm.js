// eslint-disable-next-line no-unused-vars
const peopleThatHaveUsedAlarm = [
  { name: "James", wakeUpTime: 7 },
  { name: "Susan", wakeUpTime: 13 },
  { name: "Geoff", wakeUpTime: 14 },
  { name: "Lisa", wakeUpTime: 6 }
];

function wakeup(currentTime) {
  // currentTime will be a Javascript Date object
  // https://www.w3schools.com/jsref/jsref_obj_date.asp
  const currentHour = currentTime.getHours();
  switch (currentHour) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return "Ugggggh its too early - I'm not waking up yet";
    case 12:
    case 13:
      return "Yessssss its lunch time!!!";
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
      return "Get up!! You're wasting the day";
  }
}

function snooze() {
  let snoozeAttempts = 0;

  while (snoozeAttempts < 20) {
    snoozeAttempts++;
  }

  return snoozeAttempts;
}

function announceNames() {
  // With forEach
  // const firstNames = [];
  // peopleThatHaveUsedAlarm.forEach(function(person) {
  //     firstNames.push(person.name);
  // });

  // With map
  const firstNames = peopleThatHaveUsedAlarm.map(function (person) {
    return person.name;
  });
  return firstNames;
}

function tellMeALie() {
  const peopleWithOneHourExtra = peopleThatHaveUsedAlarm.map(function (person) {
    return `${person.name} wakes up at ${person.wakeUpTime + 1}`
  });
  return peopleWithOneHourExtra;
}

function getTheEarlyRisers() {
  const earlyRisers = peopleThatHaveUsedAlarm.filter(function (person) {
    return person.wakeUpTime < 9;
  });

  return earlyRisers;
}

module.exports = {
  wakeup,
  snooze,
  announceNames,
  tellMeALie,
  getTheEarlyRisers
};
