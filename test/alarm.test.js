const alarm = require('../app/alarm');

test('Moans if too early', () => {
  let timeNow = new Date();
  timeNow.setHours(11);
  expect(alarm.wakeup(timeNow)).toBe("Ugggggh its too early - I'm not waking up yet");
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

  let expectedNames = [ "James", "Susan", "Geoff", "Lisa"];

  expect(alarm.announceNames()).toEqual(expectedNames);
});

test('Check the 1 hour lie', () => {

  const expectedResults = [ { name: "James", wakeUpTime: 8 },
                            { name: "Susan", wakeUpTime: 14 },
                            { name: "Geoff", wakeUpTime: 15 },
                            { name: "Lisa", wakeUpTime: 7 }];

  expect(alarm.tellMeALie()).toEqual(expectedResults);
});

test('Get the early risers', () => {

  const expectedResults = [ { name: "James", wakeUpTime: 7 },
                            { name: "Lisa", wakeUpTime: 6 }];

  expect(alarm.getTheEarlyRisers()).toEqual(expectedResults);
});
