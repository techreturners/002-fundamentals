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

## 2) The Other Path

Currently, only one path in the `wakeup` function is tested. Write a test that tests the other path that the function could take - what happens when the `currentHour` is after midday?

Run the test and ensure it passes.

## 3) Write a test for checking lunch time.

Lunch time is between Midday (12:00) and 2PM (14:00).

If the time of the alarm is between those times it should expect an alarm message of "_Yessssss its lunch time!!!_"

Your previous test is also now invalid because you are about to change the functionality of the code, so update that test to expect "Get up!! You're wasting the day" when the time is after 2PM instead.

**Hint**

At this stage you should have 2 tests which FAIL.

## 4) Update your wakeup function to handle lunch times

Your wakeup function should now be updated to handle lunch time.

All previous tests should pass after implementing this functionality.

## 5) Update the snooze function to be more relaxed

The alarm must have had a personality transplant and is now feeling more relaxed. Update it to allow 20 snoozes and don't forget your tests should still pass.

## 6) Using a different type of loop

Convert the snooze function to use a `while` loop instead of a `for` loop.

## 7) 'Switch' out your approach

Convert the wakeup function to a switch statement instead of using an `if` condition.

Which approach is best?

## 8) Announce all the names of people that have used the alarm

The alarm records the information of everyone that has used it. You'll see this in an array called `peopleThatHaveUsedAlarm`.

Using the `forEach` function, get the alarm to return the first names of everyone that has used the alarm. You will need to create a new function for this functionality. Think of a sensible name for your function, noting that function names are often verbs (or include verbs).

NB Do you know how to access properties in an object? You may need to google this to find out how to access the names of each person who has used the alarm!

You'll need to write a test for this as well. When testing that items in an array are equal, you should use the `toEqual` testing method instead of `toBe`. `toEqual` tests the actual values **inside** the array.

## 9) Convert to map!

In reality, using `map` instead of `forEach` is a better option when we want to transform an array, which is what we did in the above exercise.

Refactor your code to use a `map` instead of a `forEach` and check that your test still passes.

## 10) Tell a lie

The alarm has started to lie about the wakeup times. Create a new function and use the `map` function to return a list of people that have used the alarm but add 1 hour to the wakeup time. The function should return an array of strings in the format:

`["James wakes up at 8am"]`

You'll need to write a test for this as well.

## 11) Favouring the early risers

The CEO of your business wants to give pay rises to everyone that wakes up early. She would like the information about everyone that has woken up before 9AM. Create a new function and use `filter` to provide this information. The function should return an array of people who wake up before 9am (no lies this time). The array will be in the format:

```
[
    {name: "James", wakeUpTime: 7}
]
```

You'll need to write a test for this as well.

## 12) Before any time?

Actually, the CEO has changed her mind about what constitutes an "early riser". To save updating the function every time she changes her mind, update it so that it takes an parameter, `time`, which is the time before which she thinks it is "early" to wake up.

Make sure to test your function with a range of different arguments!

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

2. A for loop and a `forEach` function are quite similar. However, there are some differences. Make a list of the differences and explain why you would, in different cases, choose one over the other.
