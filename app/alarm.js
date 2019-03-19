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

  if (currentHour > 12) {
    return "Ugggggh its too early - I'm not waking up yet";
  } else {
    return "Get up!! You're wasting the day";
  }
}

function snooze() {
  let snoozeAttempts = 0;

  for (let i = 0; i < 10; i++) {
    snoozeAttempts++;
  }

  return snoozeAttempts;
}

module.exports = {
  wakeup,
  snooze
};
