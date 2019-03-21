const alarm = require('../app/alarm');

test('Moans if too early', () => {
  let timeNow = new Date();
  timeNow.setHours(11);
  expect(alarm.wakeup(timeNow)).toBe("Ugggggh its too early - I'm not waking up yet");
});

test('Tells you to get up if it is after midday', () => {
  let timeNow = new Date();
  timeNow.setHours(15);
  expect(alarm.wakeup(timeNow)).toBe("Get up!! You're wasting the day");
});

test('Its lunchtime', () => {
  let timeNow = new Date();
  timeNow.setHours(13);
  expect(alarm.wakeup(timeNow)).toBe("Yessssss its lunch time!!!");
});

test('Snoozing for a set amount', () => {
  expect(alarm.snooze()).toBe(20);
});

test('Announcing names', () => {
  const expectedNames = [ "James", "Susan", "Geoff", "Lisa"];
  expect(alarm.announceNames()).toEqual(expectedNames);
});

test('Check the 1 hour lie', () => {
  const expectedResults = [
    'James wakes up at 8',
    'Susan wakes up at 14',
    'Geoff wakes up at 15',
    'Lisa wakes up at 7'
  ];

  expect(alarm.tellMeALie()).toEqual(expectedResults);
});

test('Get the early risers', () => {
  const expectedResults = [ { name: "James", wakeUpTime: 7 },
                            { name: "Lisa", wakeUpTime: 6 }];

  expect(alarm.getTheEarlyRisers()).toEqual(expectedResults);
});
