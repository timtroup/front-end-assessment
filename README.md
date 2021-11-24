# Parking Charge Calculator

## The Challenge
You run a car park that, at the moment, has two charging options - Short Stay and Long Stay. Visitors choose which option they want to use when they enter the car park and the charge is calculated when they leave based on the length of their visit.

The following charges are used:

Short Stay
     £1.10 per hour between 8am and 6pm on weekdays, free outside of these times. Visits need not be whole hours and can last more than one day.

Long Stay
     £7.50 per day or part day including weekends, so the minimum charge will be for one day.

Design and code an application in Typescript (or JS if preferred) that will be used to calculate the total cost of a visit to the car park. We have already written specs to validate your calculatons, and stubs for those specs to call. Feel free to replace those stubs as desired.

A UI is not required, however if you wish to create one please feel free.

## Examples 

A stay entirely outside of a chargeable period will return £0.00

A short stay from 07/09/2017 16:50:00 to 09/09/2017 19:15:00 would cost £12.28

A long stay from 07/09/2017 07:50:00 to 09/09/2017 05:20:00 would cost £22.50

## Using this Repo

We have provided a skeleton of a solution Typescript here in this repo, feel free to use this as a starting point. Starting from scratch is also fine if you wish to use different technologies (e.g. pure javascript, webpack, esbuild, create-react-app etc.).

This scaffold is a simple typescript library with no ui elements. To install and run tests, the following commands may be used:

```bash
npm i
npm test:watch
```
To build the solution, the following command may be used:
```
npm run build
```

## Submitting your Solution

Our firewall will likely block any .zip attachments to emails. Therefore, a link is greatly preferred e.g. to a personal github or gitlab repo.

Feel free to either fork this repo or start from scratch.

**If you change how the build works, please ensure you update or replace this README.md with new instructions.**

### Tips

* Documentation of your thought process,such as assumptions, decisions or edge cases missed would be greatly appreciated.
* It is up to you to decide how to handle the dates. Using a framework such as date-fns is fine, but you may find it easier to write your own date utilities.
* The unit tests are quite thorough, if your solution does not pass all edge cases it will not be discounted. However, you should expect to be able to talk about this at a later interview.
* You are free to extend or replace the test suite if you wish.
* We are interested in SOLID, concise cod. Consider this when designing and structuring your solution, and how your decisions will help tackle the alogirthmic complexity of the challenge. 
* There is no strict time limit, but as a guide, the solution can be done in around 3 hours of focused work.
* Our machines are windows, so make sure your solution builds successfully on windows.
* You may have noticed the `engines` config in the package.json. We will be be using at least the minimum version of node specified there to build your solution.
* Please replace or update this README.md if your build instructions change.


