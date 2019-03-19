# Coding Tasks

**Note**

Where applicable, try to do the coding tasks with [ping pong pair programming](http://wiki.c2.com/?PairProgrammingPingPongPattern).

For example, in your pairs, person A could do task 2, observe that the test fails because task 3 has not been completed.

Person B then implements the code for task 3.

You then re-run the test and find that it passes.

Then Person B writes the test and code for task 4.

Person A writes the code and implements the function for task 5 and so on and so on.

## 1) Fixing the test

There is currently one test - if you run the test `npm run test` you'll notice that it is failing.

Work out how to ensure this test now passes.

**Hint**

The code in the test itself does NOT need changing

## 2) Write a test for checking lunch time.

Lunch time is between Midday (12:00) and 2PM (14:00).

If the time of the alarm is between those times it should expect an alarm message of "_Yessssss its lunch time!!!_"

**Hint**

At this stage the test should FAIL.

## 3) Update your wakeup function to handle lunch times

Your wakeup function should now be updated to handle lunch time and once updated the test from task 2 should now pass.

Also note any previous tests should continue to pass.

## 4) Update the snooze function to be more relaxed

The alarm must have had a personality transplant is now feeling more relaxed. Update it to allow 20 snoozes and don't forget your tests should still pass.

## 5) Using a different type of loop

Convert the snooze function to use a `while` loop instead of a `for` loop.

## 6) 'Switch' out your approach

Convert the wakeup function to a switch statement instead of using an `if` condition.

Which approach is best?

## 7) Announce all the names of people that have used the alarm

The alarm records the information of everyone that has used it. You'll see this in an array call `peopleThatHaveUsedAlarm`.

Using the `forEach` function, get the alarm to return the first names of everyone that has used the alarm. You will need to create a new function for this functionality. Think of a sensible name for your function, noting that function names are ofteb verbs (or include verbs).

You'll need to write a test to do this as well.

## 8) Tell a lie

The alarm has started to lie about the wakeup times. Create a new function and use the `map` function to return a list of people that have used the alarm but add 1 hour to the wakeup time. The function should return an array of strings in the format:

`["James wakes up at 9am"]`

You'll need to write a test to do this as well.

## 9) Favouring the early risers

The CEO of your business wants to give pay rises to everyone that wakes up early. She would like the information about everyone that has woken up before 9AM. Create a new function and use `filter` to provide this information. The function should return an array of names of everyone who wakes up before 9am.

You'll need to write a test to do this as well.

# Written questions

The following questions are intended to be answered with written answers (no coding required) and should re-enforce some of the learning you have completed.

1. What might happen if we just created the date as a new date (every time) in the wakeup function? Why does this make it difficult to test the function?

So the code might look like this:

```
function wakeup() {

    const currentHour = new Date().getHours();

    if(currentHour > 12 ) {
        return "Ugggggh its too early - I'm not waking up yet";
    }
    else {
        return "Get up!! You're wasting the day";
    }
}
```
