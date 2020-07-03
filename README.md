# LHR React Test

This exercise should test some basic react knowledge, as well as testing some problem solving around asynchronous and realtime API’s.

The real test here is for functionality, but if you feel that you would like to express some UX or design thinking, feel free to do so.

Everything in `/Service` is fine to look at or change for testing purposes, but none of these exercises require any changes to these files.

## Getting Started

Clone this repo

`git clone https://github.com/franklinharvey/LHR-React-Test.git`

install deps

`npm install`

and start running

`npm start`

this will start a web server on `localhost:3000` and will hot reload for you

## Part 1, Organization

We would like to see all of the users of a fictitious application, organized by last name. For instance, if we have a list of users:

```
Simmons Howard Thomas
Reed Carter
Ross Sara Eric
Albert Howard Long
Henry Long
Simmons Thomas Alexander
Carolyn Sara Scott
```

We want to be able to somehow view all of our users whose last name start with some letter. If in this example we choose `L` we should see

```
Albert Howard Long
Henry Long
```

You will need some mechanism for selecting a letter, we don’t care what it is, a simple `<select/>` or `<input/>` is fine.

In `Organization/index.ts` create a react component that displays the users returned from class `Service`’s `fetchUserList` method. You need only to display a static list of names.

For inspiration, check out `SingleUser/index.ts` to see how you can fetch and display single user.

__Bonus__: Show some type of loading indicator between the time of making the call and the response

## Part 2, New Users

We want to see users sign up in realtime!

In `NewUsers/index.ts` you will do something very similar to part 1, except instead of calling `fetchUserList`, you will use `listenForUser`. This method takes a callback, and will call that callback with a new user every so often.

Using this method, display a list of _new_ users' names, and when they signed up. This list should be sorted so that the most recent sign ups are at the top.

## Part 3, Final

We want to see all of our users, organized by their last name, and sorted by the time that they signed up.

Like in part 1, you will need some mechanism for selecting a letter of the alphabet. When that letter is selected, we should see all the users whose last name starts with that letter, _and_ see new users appear in this list as they sign up.

In `Final/index.ts` you will need both calls that you have already used, `fetchUserList` and `listenForUser`.

**Note**: `fetchUserList` does not guarantee sorting, but any user coming from `listenForUser` _will_ have a sign up date later than any user in `fetchUserList`.

__Bonus__: Use Rx. You can solve this by having one observable that starts with the fetched user list, is sorted and and organized correctly, and will update with every new user. You can use `Service`'s `listenForUserRx` if you would like. Maybe look into Rx's `scan` or some other accumulator operator.
