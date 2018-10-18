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
        case 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11: {
            return "Ugggggh its too early - I'm not waking up yet";
        }
        case 12, 13: {
            return "Yessssss its lunch time!!!";
        }
        case 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24: {
            return "Get up!! You're wasting the day";
        }

    }
}

function snooze() {
  let snoozeAttempts = 0;

    let snoozeAttempts = 0;

    while(snoozeAttempts < 20 ) {
        snoozeAttempts++;
    }

  return snoozeAttempts;
}

module.exports = {
  wakeup,
  snooze
};
