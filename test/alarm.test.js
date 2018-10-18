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
